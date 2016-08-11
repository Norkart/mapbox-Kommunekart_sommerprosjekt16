var raster={
  wmsUrl:"http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers=",
  activeLayerNames:[], //rasters drawn
  globalActiveLayernames:[], //all rasters that is active for kommuner, may not exist in all of them and therefor need a seperate list
  allAvailableLayers:{}, //objects, where key is name of layer, and the values objects with name and area
  layerZoomlevels:{},
  scaleArray:[0, 134217728, 67108864, 33554432, 16777216, 8388608, 4194304, 2097152, 1048576, 524288, 262144, 131072, 65536, 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128]
}

map.on('moveend', function(){
  raster.handleWarningSigns();
  // toggleSattelliteRasters();
});


raster.handleWarningSigns=function(){
  //create visualisation to show if raster overlay is showing or not at current zoomlevel
  if(raster.activeLayerNames.length>0){
    for(var i=0; i<raster.activeLayerNames.length; i++){
      //mapbox zoomlevel = leaflet zoom -1
      if(raster.isVisible(raster.activeLayerNames[i])){
      // if(raster.layerZoomlevels[raster.activeLayerNames[i]][0]-1 >= map.getZoom() && raster.layerZoomlevels[raster.activeLayerNames[i]][1]-1 <= map.getZoom()){//  minZoom < current zoom < maxZoom --> Visible at current level
        raster.toggleWarningSign(false, raster.activeLayerNames[i]);
      }else{
        raster.toggleWarningSign(true, raster.activeLayerNames[i]);
      }
    }
  }
}

raster.isVisible=function(layername){
  //mapbox zoomlevel = leaflet zoom -1
  if(raster.layerZoomlevels[layername][0]-1 >= map.getZoom() && raster.layerZoomlevels[layername][1]-1 <= map.getZoom()){ // minZoom < current zoom < maxZoom --> Visible at current level
    return true;
  }else{
    return false;
  }
}

raster.toggleWarningSign = function(visible, layername){
  var minzoom=raster.layerZoomlevels[layername][1]-1;
  var kommune=document.getElementById("layerList");
  for (var i = 0; i < kommune.children.length; i++) {
    var child=kommune.children[i];
    if(child.getAttribute("name")===layername){
      var check = child.children[1];
      if(visible){
        if(child.children.length<3){ //no warning sign already
          //add warning img in li element
          var warning=document.createElement("img");
          warning.id="advarsel";
          warning.title="Ikke synlig nå, zoom inn for å se laget";
          warning.src="../Images/blackIcons/other/warning.png";
          warning.setAttribute("minzoom", minzoom);
          warning.addEventListener("click", function(e){
              e.stopPropagation();
              map.flyTo({
                zoom: event.currentTarget.getAttribute("minzoom"),
                speed: 0.9
              });
          });
          child.appendChild(warning);
          }
      }else{
        // remove warning img
        if(child.children.length>2){
          child.removeChild(child.children[2]);
        }
      }
    }
  }
}
//                                                                                                            65536 = zoom level 14
raster.getZoomLevel=function(scaleHint) {
  // Gets the zoomLevel from the layers scaleHint
  // Unsure if this interpertation is correct.
  if (scaleHint == 0)
  return 22;
  for (var i = 1; i < raster.scaleArray.length; i++) {
    if (raster.scaleArray[i] < scaleHint) {
      return i;
    }
  }

  // none of the scales in scalearray where small enough -> return largest possible supported zoomlevel
  return raster.scaleArray.length;
}

raster.saveZoomLevelForLayers=function(layers){
  for(var i=0; i<layers.length; i++){
    raster.layerZoomlevels[layers[i].Name]=[raster.getZoomLevel(layers[i].ScaleHintMin), raster.getZoomLevel(layers[i].ScaleHintMax)];
  }
}

raster.setOverlayMenu=function(kommuneId){
  var layersUrl="https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetCapabilities?applicationID=Web-VectortilesDemo-"+kommuneId;
  $.ajax({
    url:layersUrl
  }).done(function(res){
    for(var i=0; i<res.length; i++){
      raster.saveZoomLevelForLayers(res[i].Layers);
    }
    hideKommuneMenuContent("kommune");
    createRasterLayerMenu(res);
    if(menuState.sideNavOpen){
      showKommuneMenuContent("raster");
    }
    //if rasteroverlays are chosen from before
    raster.addAlreadyActiveOverlays();
  });
}

raster.addAlreadyActiveOverlays=function(){
  //add layers from previouslyActiveLayerNames
  for (var i = 0; i < raster.globalActiveLayernames.length; i++) {
    var layers=document.getElementById("layerList").children;
    for (var j=0; j<layers.length; j++){
      if(layers.nodeName==="H4"){
        return;
        //do nothing, only a category
      }else{
        if(raster.globalActiveLayernames[i]===layers[j].getAttribute("name")){ //active layers exist in layers for new kommune
          raster.enable(raster.globalActiveLayernames[i], layers[j]);
          raster.updateView(raster.globalActiveLayernames[i], layers[j].getAttribute("area"));
        }
      }
    }
  }
}


// raster.layerClickEvent=function(target){
raster.layerClickEvent=function(layerName){
  //For each click the source url has to be updated: Either a layer is added or removed but the string has to be manipulated either way
  // var liElement = target.parentNode;
  var liElement=document.getElementById(layerName);
  var target=document.getElementById(layerName).children[1];
  var activeLayer=liElement.getAttribute("active");
  if(activeLayer==="true"){
    updateActiveCheckboxObj(layerName, "lag", false);
    raster.turnOff(target, layerName, liElement);
  }else{
    updateActiveCheckboxObj(layerName, "lag", true);
    raster.turnOn(target, layerName, liElement);
  }
  // raster.updateView(liElement.getAttribute("name"), liElement.getAttribute("area"));
  raster.updateView(layerName, liElement.getAttribute("area"));
  // updateInformationSideMenu(target.getAttribute("name"), target.getAttribute("area"));
}

raster.turnOn=function(target, layerName, liElement){
  $(target).toggleClass("checked");
  if(document.getElementById(layerName+"-gfiCheckboxDiv")!==null){ // if right sidemenu active, update the checkbox there as well
    var gfiCheckbox=document.getElementById(layerName+"-gfiCheckboxDiv").children[2].children[0];
    $(gfiCheckbox).addClass("checked");
  }
  // raster.enable(liElement.getAttribute("name"), liElement);
  raster.enable(layerName, liElement);
}

raster.turnOff=function(target, layerName, liElement){
  $(target).toggleClass("checked");
  if(document.getElementById(layerName+"-gfiCheckboxDiv")!==null){ // if right sidemenu active, update the checkbox there as well
    var gfiCheckbox=document.getElementById(layerName+"-gfiCheckboxDiv").children[2].children[0];
    $(gfiCheckbox).removeClass("checked");
  }
  // common.removeFromList(liElement.getAttribute("name"), raster.activeLayerNames);
  common.removeFromList(layerName, raster.activeLayerNames);
  // updateGlobalActiveRaster("remove", target.getAttribute("name"));
  updateGlobalActiveRaster("remove",layerName);
  liElement.setAttribute("active", false);
  liElement.className="";
  target.setAttribute("active", false);
  target.className="check";
  raster.toggleWarningSign(false, liElement.getAttribute("name"));
}

raster.enable=function(layerName, currentListElement){
  updateGlobalActiveRaster("add", currentListElement.getAttribute("name"));
  raster.activeLayerNames.push(layerName);
  currentListElement.setAttribute("active", true);
  currentListElement.className="activeRasterElement";
  raster.toggleWarningSign(!raster.isVisible(layerName), layerName);
}

raster.updateView = function(name, layerArea){
  raster.remove("rasterOverlay", raster.activeLayerNames);
  var layerString=raster.activeLayerNames[0]; //Adding first layer here to be able to add a comma before each insertion inside the for loop

  if(raster.activeLayerNames.length>0){
    for(var i=1; i<raster.activeLayerNames.length; i++){
      layerString+=","+raster.activeLayerNames[i];
    }
    var url=raster.wmsUrl+layerArea+":"+layerString;
    //var url="http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers="+layerArea+":"+layerString;
    raster.addNew(url, "rasterOverlay");
  }else{
    console.log("no active layers - nothing added");
  }
}

raster.addAerial =function(url, name){ //het addAerialRaster()
  if(map.getSource(name)!=undefined){
    map.removeSource(name);
  }
  var sourceObj={
    "type":"raster",
    "tiles":[url],
    "tileSize":256
  };
  map.addSource(name,sourceObj);
}

raster.addNew=function(url, name, zoomLevel){
  var mz;
  if(zoomLevel){
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
  if(name==="aerialRaster"){ //different place for background satellite raster
    layerNameToInsertBefore="tunnel-secondary-tertiary case";
  }
  var layerObj={
    "id":name,
    "type":"raster",
    "source":name,
    "id": name,
    "layout": {
      "visibility": "visible"
    },
    "source-layer": "raster",
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

  map.once("render", function(){
  });
}


raster.removeAerialRaster=function(){ //gets called everytime a kommune is chosen - shoudl be changed!! only called depending on zoom level
  var name="aerialRaster";
  if(map.getSource(name)!==undefined){
    map.removeSource(name);
    map.removeLayer(name);
  }else{
    console.log("ERROR");
  }
}



function updateGlobalActiveRaster(action, layername){
  var found=false;
  for(var i=0; i<raster.globalActiveLayernames.length; i++){
    if(layername===raster.globalActiveLayernames[i]){
      if(action==="add"){
        found=true;
      }else if(action==="remove"){
        raster.globalActiveLayernames.splice(i, 1);
      }
    }
  }
  if(found==false && action==="add"){
    raster.globalActiveLayernames.push(layername);
  }
}

raster.resetOverlays =function(){
  //add layers that are active
  raster.activeLayerNames=[];
  var kommuneElements=document.getElementsByClassName('kommuneElement');
  //delete layerList for kommune with "open" raster menu
  var list=document.getElementById("layerList");
  if(list){
    list.parentNode.removeChild(list);
  }
  raster.remove("rasterOverlay");
}

raster.remove=function(name){ //gets called everytime a kommune is chosen
  if(map.getSource(name)!==undefined){
    map.removeSource(name);
    map.removeLayer(name);
  }else{
    return false;
  }
}

function mapClickMoreInfoEvent(kommuneId){
  var layersUrl="https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetCapabilities?applicationID=Web-VectortilesDemo-"+kommuneId;
  $.ajax({
    url:layersUrl
  }).done(function(res){
    updateInformationSideMenu(res);
  });
}
