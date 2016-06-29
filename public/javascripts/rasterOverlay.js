
var wmsUrl="http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers=";
var activeLayerNames=[];

function setRasterOverlayMenu(kommuneId, idForKommuneListElement){

  var layersUrl="https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetCapabilities?applicationID=Web-VectortilesDemo-"+kommuneId;
  console.log(layersUrl);

  var layerArea; //name for url for area of different layers
  var layerName; //end of url for specific raster layer
  $.ajax({
    url:layersUrl
  }).done(function(res){
    removeKommuneListMenu();
    createRasterLayerMenu(res);
  });
}



function formatName(name){
  var formattedName=name.toLowerCase();
  //first char uppercase
  formattedName=formattedName.replace(formattedName.charAt(0),formattedName.charAt(0).toUpperCase());
  formattedName=formattedName.split("_").join(" ");
  return formattedName;
}

function createRasterLayerMenu(layerInfoJson){

  var rasterMenu=document.createElement("ul");
  rasterMenu.id="layerList";
  rasterMenu.className="sideMenuLists";
  console.log(layerInfoJson);

  layerArea=layerInfoJson[0].Name;
  for(var i=0; i<layerInfoJson[0].Layers.length; i++){
    var rasterElement = document.createElement("li");
    layerName=layerInfoJson[0].Layers[i].Name;
    layerNameMenu=layerInfoJson[0].Layers[i].Description;
    formattedLayerName=formatName(layerNameMenu);
    rasterElement.setAttribute("name",layerName);
    rasterElement.setAttribute("area",layerArea);
    rasterElement.setAttribute("active", false);
    rasterElement.innerHTML=formattedLayerName;

    rasterElement.addEventListener("click", function(){
      rasterLayerClickEvent();
    });

    //adding raster element to raster list:
    rasterMenu.appendChild(rasterElement);
  }
  //adding the raster overlays list two kommune element
  document.getElementById("kommunekart-menu").appendChild(rasterMenu);
  $("#layerList").addClass("kommuneDropdownVisible");
}


function rasterLayerClickEvent(){
  //For each click the source url has to be updated: Either a layer is added or removed but the string has to be manipulated either way

  var activeLayer=event.currentTarget.getAttribute("active");
  console.log(activeLayer);
  if(activeLayer==="true"){
    console.log("remove");
    removeFromList(event.currentTarget.getAttribute("name"), activeLayerNames);
    event.currentTarget.setAttribute("active", false);
    event.currentTarget.className="";

  }else{
    console.log("add");
    activeLayerNames.push(event.currentTarget.getAttribute("name"));
    event.currentTarget.setAttribute("active", true);
    event.currentTarget.className="activeRasterElement";
  }
  updateRasterView(event.currentTarget.getAttribute("name"), event.currentTarget.getAttribute("area"));
}


function updateRasterView(name, layerArea){
  console.log("oppdaterer");
  removeRaster("rasterOverlay", activeLayerNames);
  var layerString=activeLayerNames[0]; //Adding first layer here to be able to add a comma before each insertion inside the for loop

  if(activeLayerNames.length>0){
    for(var i=1; i<activeLayerNames.length; i++){
      layerString+=","+activeLayerNames[i];
    }
    var url=wmsUrl+layerArea+":"+layerString;
    //var url="http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers="+layerArea+":"+layerString;
    console.log(url);
    if(mapStyle==="aerial"){
      addAerialRaster(url, "rasterOverlay");
    } else{
      addRaster(url, "rasterOverlay");
    }
  }else{
    console.log("no active layers - nothing added");
  }
}

function addAerialRaster(url, name){
  map.removeSource(name); //Default source always on - therefore have to remove first
  var sourceObj={
    "type":"raster",
    "tiles":[url],
    "tileSize":256
  };
  map.addSource(name,sourceObj);
}
function removeRaster(name){
  console.log("removing raster");
  if(map.getSource(name)!==undefined){
    map.removeSource(name);
    map.removeLayer(name);
    if(mapStyle==="aerial"){
      addRaster(wmsUrl,name); //adding sattelite raster that should always be there
    }
    return true;
  }else{
    console.log("no raster to delete");
    return false;
  }
}


function addRaster(url, name, zoomLevel){
  console.log("adding raster");
  var mz;
  if(zoomLevel){
    console.log("satt");
    mz=zoomLevel;
  }else{
    mz=0;
  }
  var sourceObj={
    "type":"raster",
    "tiles":[url],
    "tileSize":256
  };
  map.addSource(name,sourceObj);
  var layerNameToInsertBefore="rail-station-label";
  var layerObj={
    "id":name,
    "type":"raster",
    "source":name,
    "id": name,
    "layout": {
      "visibility": "visible"
    },
    "source-layer": "testRaster",
    "paint": {
      "raster-fade-duration": 100
    },
    "paint.contours": {
      "raster-opacity": {
        "base": 1,
        "stops": [
          [ 11, 1 ],
          [ 12, 0.5 ]
        ]
      }
    },
    "minzoom": mz,
    "maxzoom": 22
  }
  map.addLayer(layerObj, layerNameToInsertBefore);
}

function removeFromList(element, list){
  var index;
  for(var i=0; i<list.length; i++){
    if(list[i]===element){
      index=i;
    }
  }
  return list.splice(index,1);
}

function resetRasterOverlays(){
  activeLayerNames=[];
  var kommuneElements=document.getElementsByClassName('kommuneElement');

  //delete layerList for kommune with "open" raster menu
  var list=document.getElementById("layerList");
  if(list){
    list.parentNode.removeChild(list);
  }
  removeRaster("rasterOverlay");
}
