
var wmsUrl="http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers=";
var activeLayerNames=[]; //rasters drawn
var layerArea; //name for url for area of different layers
var layerName; //end of url for specific raster layer
var rasterLayerZoomlevels={};

map.on('moveend', function(){
  //create visualisation to show if raster overlay is showing or not at current zoomlevel
  if(activeLayerNames.length>0){
    for(var i=0; i<activeLayerNames.length; i++){
      // console.log(activeLayerNames[i]);
      // console.log(rasterLayerZoomlevels[activeLayerNames[i]][0]-1);
      // console.log(rasterLayerZoomlevels[activeLayerNames[i]][1]-1);

      //mapbox zoomlevel = leaflet zoom -1
      if(isRasterVisible(activeLayerNames[i])){
      // if(rasterLayerZoomlevels[activeLayerNames[i]][0]-1 >= map.getZoom() && rasterLayerZoomlevels[activeLayerNames[i]][1]-1 <= map.getZoom()){//  minZoom < current zoom < maxZoom --> Visible at current level
        console.log("VISIBLE NOW");
        toggleWarningSign(false, activeLayerNames[i]);
      }else{
        console.log("NOT VISIBLE NOW");
        toggleWarningSign(true, activeLayerNames[i]);
      }
    }
  }
});

function isRasterVisible(layername){
  //mapbox zoomlevel = leaflet zoom -1
  if(rasterLayerZoomlevels[layername][0]-1 >= map.getZoom() && rasterLayerZoomlevels[layername][1]-1 <= map.getZoom()){ // minZoom < current zoom < maxZoom --> Visible at current level
    return true;
  }else{
    return false;
  }
}

function toggleWarningSign(visible, layername){
  var minzoom=rasterLayerZoomlevels[layername][1]-1;
  console.log(minzoom);
  var kommune=document.getElementById("layerList");
  for (var i = 0; i < kommune.children.length; i++) {
    var child=kommune.children[i];
    if(child.getAttribute("name")===layername){
      console.log("found correct dom element");
      if(visible){
        console.log(child.children);
        if(child.children.length<1){ //no warning sign already
          //add warning img in li element
          var warning=document.createElement("img");
          warning.id="advarsel";
          warning.title="Zoom in for å se layer";
          warning.src="../Images/advarsel.png";
          warning.setAttribute("minzoom", minzoom);
          warning.addEventListener("click", function(e){
              e.stopPropagation();
              console.log("zoom click");
              console.log(event.currentTarget.getAttribute("minzoom"));
              var options={
                zoom: event.currentTarget.getAttribute("minzoom"),
                speed: 0.9
              }
              map.flyTo(options);
              // map.setZoom(event.currentTarget.getAttribute("minzoom"));
          });
          console.log(warning);
          child.appendChild(warning);
          }
      }else{
        // remove warning img
        console.log("removing child");
        if(child.children.length>0){
          child.removeChild(child.children[0]);
        }
      }
    }
  }
}

ScaleArray = [0, 134217728, 67108864, 33554432, 16777216, 8388608, 4194304, 2097152, 1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128];
function getZoomLevel(scaleHint) {
  // Gets the zoomLevel from the layers scaleHint
  // Unsure if this interpertation is correct.
  if (scaleHint == 0)
  return 22;
  for (var i = 1; i < ScaleArray.length; i++) {
    if (ScaleArray[i] < scaleHint) {
      return i;
    }
  }

  // none of the scales in scalearray where small enough -> return largest possible supported zoomlevel
  return ScaleArray.length;
}

function saveZoomLevelForLayers(layers){
  for(var i=0; i<layers.length; i++){
    rasterLayerZoomlevels[layers[i].Name]=[getZoomLevel(layers[i].ScaleHintMin), getZoomLevel(layers[i].ScaleHintMax)];
  }
  console.log(rasterLayerZoomlevels);
}

function setRasterOverlayMenu(kommuneId){
  console.log(kommuneId);
  var layersUrl="https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetCapabilities?applicationID=Web-VectortilesDemo-"+kommuneId;
  $.ajax({
    url:layersUrl
  }).done(function(res){
    saveZoomLevelForLayers(res[0].Layers);
    hideKommuneMenuContent("kommune");
    createRasterLayerMenu(res);
    if(menuState.sideNavOpen){
      showKommuneMenuContent("raster");
    }
  });
}

function formatName(name){
  var formattedName=name.toLowerCase();
  //first char uppercase
  formattedName=formattedName.replace(formattedName.charAt(0),formattedName.charAt(0).toUpperCase());
  formattedName=formattedName.split("_").join(" ");
  return formattedName;
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
    toggleWarningSign(false, event.currentTarget.getAttribute("name"));
  }else{
    console.log("add");
    activeLayerNames.push(event.currentTarget.getAttribute("name"));
    event.currentTarget.setAttribute("active", true);
    event.currentTarget.className="activeRasterElement";
    toggleWarningSign(!isRasterVisible(event.currentTarget.getAttribute("name")), event.currentTarget.getAttribute("name"));
  }
  updateRasterView(event.currentTarget.getAttribute("name"), event.currentTarget.getAttribute("area"));
  console.log(isRasterVisible(event.currentTarget.getAttribute("name")));

  // updateInformationSideMenu(event.currentTarget.getAttribute("name"), event.currentTarget.getAttribute("area"));
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

function getKommuneId(){

}

function mapClickMoreInfoEvent(kommuneId){
  var layersUrl="https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetCapabilities?applicationID=Web-VectortilesDemo-"+kommuneId;
  // console.log(layersUrl);
  $.ajax({
    url:layersUrl
  }).done(function(res){
    console.log(res);
    updateInformationSideMenu(res);
  });
}

//Featureinfo for sidemenu:
function updateInformationSideMenu(response){

  // removeRaster("rasterOverlay", activeLayerNames);
  // var layerString=activeLayerNames[0]; //Adding first layer here to be able to add a comma before each insertion inside the for loop

  // if(activeLayerNames.length>0){
  //   for(var i=1; i<activeLayerNames.length; i++){
  //
  //     layerString+=","+activeLayerNames[i];
  //   }
  //   var FeatureinfoUrl="http://www.webatlas.no/wacloudtest/servicerepository/FeatureInfoService.svc/json/GetFeatureInfo?x={X}&y={Y}&srs=EPSG:4326&tolerance=1&querylayers="+layerArea+":"+layerString;
  //   console.log("URL "+FeatureinfoUrl);
  // }

}
