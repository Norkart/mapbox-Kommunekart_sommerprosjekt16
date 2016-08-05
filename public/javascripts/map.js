var menuState={
  "kommuneMenuOpen": false, //true
  "type": "kommune", //raster
  "chosenKommuneId": false, //id to active kommune
  "activeKommuneCenter":false, //coordinates for center of active kommune
  "activeKommuneMiddle":false, //coordinates to show border of active kommune
  "sideNavOpen":true,
  "infoSidebarStatus":false
};

var mapmodus = "popup";
var mapStyle = "normal";
var osmActive=true;
var kommuneObjectList={};
var kommune;
var tjenesteObjects={};

mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vpbm8iLCJhIjoiOE5oc094SSJ9.DHxjhFy2Ef33iP8yqIm5cA';
var map = new mapboxgl.Map({
  container: 'map',
  //style: '../mapTest2.json',
  //style:"mapbox://styles/keino/cio2gxo6b000wc7m7xfh2z02o",
  style:normalMapLayers,
  center:[13,65],
  zoom:4.5
});

map.addControl(new mapboxgl.Navigation({position: 'bottom-right'}));
map.addControl(new mapboxgl.Geolocate({position: 'bottom-right'}));

//sets boundarie for how often a function can be called
var throttle = function(func, time) {
  var callFunction = true;
  return function() {
    if(callFunction === true) {
      callFunction = false;
      func.apply(this, arguments);
      setTimeout(function() {
        callFunction = true;
      }, time);
    }
  };
};

map.on('move', throttle(updateOsmMap, 500)); //make sure it doesn't run too often

function updateOsmMap(){
  //check border intersection between norway and bounding box of the view
  var bboxPol= getBBoxPol();
  var norwayPol=norBorder.features[0];
  var difference=turf.erase(bboxPol, norwayPol);
  if(difference==undefined && osmActive){ //i norge, osm på --> skru av
    toggleOSM(false); //turn off
    osmActive=false;
  }else if(difference!=undefined && osmActive ==false){ //difference defined, meaning some of bbox outside norway, osm off --> turn on osm
    toggleOSM(true); //turn on
    osmActive=true;
  }else{
    //do nothing
  }
}

function toggleOSM(visible){ //change visibility for open street map layers depending on "visible" value
  if(menuState.mapStyle==="aerial"){
    var layerList=flyfoto.layers;
  }else{
    var layerList=normalMapLayers.layers;
  }
  var osmGroup="1452169018974.0132";
  for(var i=0; i<layerList.length; i++){
    var layer=layerList[i];
    if(layer.metadata){
      if(layer.metadata["mapbox:group"] === osmGroup){
        if(visible){// make layers visible
          map.setLayoutProperty(layer.id, 'visibility', 'visible');
        }else{
          map.setLayoutProperty(layer.id, 'visibility', 'none');
          map.getLayoutProperty(layer.id, 'visibility');
        }
      }
    }
  }
}


var stillLoading;
var interval;
var drag=false;

//Sets a progress bar by checking if render is still running. When render is not fired anymore, the variable stillLoading will not be changed back
// to true, and the interval function will change cursos and then terminate it self

// map.on("dragstart", function(){
//   console.log("TOUCH MOVED");
//   console.log(drag);
//   drag=true;
// });

map.on("render", function(){
  console.log(drag);
    // if(activeLayerNames.length>0 && drag===false){
    if(activeLayerNames.length>0){
    changeGlobalCursor("wait");
    stillLoading=true;
    setProgressBar();
  }else{
    // drag=false;
  }
});


function setProgressBar(){
  clearInterval(interval);
  interval=setInterval(function(){
      if(stillLoading===false){
        drag=false;
        document.body.style.cursor='auto';
        changeGlobalCursor("auto");
        clearInterval(interval);
      }else{
        stillLoading=false;
      }
  }, 100);
}

function changeGlobalCursor(type){
  if(type==="wait" && !$("#map").hasClass("wait")){
    $('*').css('cursor', 'wait');
  }else if(type==="auto"){
    $('*').css('cursor', '');
  }
}

function getBBoxPol(){
  var bounds=map.getBounds();
  var sw=[bounds._sw.lng, bounds._sw.lat];
  var ne=[bounds._ne.lng, bounds._ne.lat];
  var nw=[sw[0], ne[1]]; //lng, lat
  var se=[ne[0], sw[1]];
  var pol={
    "type": "Feature",
    "properties":{},
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[[
        [bounds._sw.lng, bounds._sw.lat],
        [sw[0], ne[1]],
        [bounds._ne.lng, bounds._ne.lat],
        [ne[0], sw[1]],
        [bounds._sw.lng, bounds._sw.lat]
      ]]]
    }
  };
  return pol;
}

//called when kommune is clicked
function flyTo(){
  var kommune=kommuneObjectList[menuState.chosenKommuneId];
  var zoomTo=kommune.StartZoom;
  if(zoomTo==-1){
    zoomTo=14;
  }
  var middleEast= kommune.West + ((kommune.East-kommune.West)/2);
  var middleNorth = kommune.South + ((kommune.North-kommune.South)/2);
  var startEast=kommune.StartEast;
  //find middle point of bounding box
  if(startEast==0){
    startEast= middleEast;
  }
  var startNorth=kommune.StartNorth;
  if(startNorth==0){
    startNorth=middleNorth;
  }
  map.flyTo({
    center:[startEast,startNorth],
    // zoom:zoomTo-5
    zoom:10
  });
  menuState.activeKommuneCenter=[startEast, startNorth];
  menuState.activeKommuneMiddle=[middleEast, middleNorth];
}

function toggleSlideOfMapCtrl(){
  if( $(".mapboxgl-ctrl-group").hasClass("ctrl-slide-out") ){
    console.log("Har klassen - skal slette");
    $(".mapboxgl-ctrl-group").removeClass("ctrl-slide-out");

  }else{
    $(".mapboxgl-ctrl-group").addClass("ctrl-slide-out");
  }
}


//Adding popup info
map.on('click', function (e) {
  if(mapmodus === "popup"){
    popupClickEvent(e);
  }
  else{
    return false;
  }
});

function popupClickEvent(e){
  if(!menuState.infoSidebarStatus){
    if(menuState.sideNavOpen){
      toggleSideMenu();
    }
    menuState.infoSidebarStatus = true;
    $("#infoSidebar").toggleClass("sidenavOpen");
    toggleSlideOfMapCtrl();
  }
  updateMarker(e);
  add_POI_Info(e);
}

function updateMarker(e){
  if(map.getLayer("marker")!==undefined){
    map.removeLayer("marker");
    map.removeSource("marker");
  }
  map.addSource("marker", {
      "type": "geojson",
      "data": {
          "type": "FeatureCollection",
          "features": [{
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [e.lngLat.lng,e.lngLat.lat]
              }
          }]
      }
  });

  map.addLayer({
      "id": "marker",
      "type": "symbol",
      "source": "marker",
      "layout": {
          "icon-image": "MarkerKommunekart",
          "icon-offset": [0,-25]
      }
  });
}


function changeBackgroundMap(maptype) {
  if(mapStyle==="aerial"  || mapStyle==="normal" ){
    $('.aerial').toggleClass('selected');
    $('.normal').toggleClass('selected');
  }
  if(maptype==="normal"){
    map.setStyle(normalMapLayers);
    map.once("render", function(){
      if(menuState.chosenKommuneId!=undefined){
        updateKommuneBorder();
      }
    });
    mapStyle="normal";
    wmsUrl="http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers=";
    $("#menu-selector").removeClass("darkerColor");
  }else if(maptype==="aerial"){
    map.setStyle(flyfoto);
    mapStyle ="aerial";
    map.once("render", function(){
      addRaster("http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers=TMS_WEBATLAS_STANDARD:1", "aerialRaster", 10);
      if(menuState.chosenKommuneId!=undefined){
        updateKommuneBorder();
      }
    });
    wmsUrl = "http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers=TMS_WEBATLAS_STANDARD:1;";
    $("#menu-selector").addClass("darkerColor");
  }
  map.once("render", function(){
    addAlreadyActiveOverlays();
  });


  //TODO: Fix so it changes accordingly to how it was before the change
  document.getElementById("symbolLayers").checked=true;
  document.getElementById("otherLayers").checked=true;
}


//Update sideMenu
function updateAdress(longitude, latitude, callback){
  var adressUrl= "https://kommunekart.com/api/WebPublisher/ReverseGeoCode?x="+latitude+"&y="+longitude+"&apiRoute=api%2FWebPublisher%2FReverseGeoCode&appId=Kommunekart";
  $.ajax({
    url: adressUrl,
    complete: callback
  });
}


//draw grey background outside of choosen kommune
var currentKommune=false;
var kommuneElementClicked=false;
map.on('moveend', throttle(updateKommuneBorder, 500));


function updateKommuneBorder(){
  if(document.getElementById("borders").checked===false){ //user unchecekd borders
    console.log("unchecked borders - not showing!");
    removeDrawnBorder();
    return;
  }else if(map.getZoom()<=9.5){
    removeDrawnBorder();
    return;
  }else{
    drawDarkAroundKommuneBorder();
  }
}

function removeDrawnBorder(){
  var name="outsideKommune";
  //if area drawn, remove it:
  if(map.getLayer(name)!=undefined){
    map.removeSource(name);
    map.removeLayer(name);
    currentKommune=false;
  }
}

function drawDarkAroundKommuneBorder(){

  var name="outsideKommune";
  var lat = map.getCenter().lat;
  var lng = map.getCenter().lng;
  var url="http://www.webatlas.no/wacloudtest/servicerepository/GeoNameService.svc/json/FindMunicipalityWithGeometry?srs=EPSG:4326&east="+lng+"&north="+lat;
  $.ajax({
    url:url
  }).done(function(res){
    if(currentKommune===res.Name && map.getLayer(name)!=undefined){//same as last kommune and something is drawn
      return; //do nothing if still inside same kommune
    }
    var bboxExpanded=getBboxExpanded();
    var kommunePol=makeGeojsonFeature(res.Geometries);
    var paintGreyPolygon=turf.erase(bboxExpanded, kommunePol);
    if(map.getLayer(name)!=undefined){
      map.removeSource(name);
      map.removeLayer(name);
    }
    var sourceObj=getSourceObj(paintGreyPolygon);
    map.addSource(name,sourceObj);
    var layerObj=getLayerObj(name);
    map.addLayer(layerObj);
    currentKommune=res.Name;
  });
}

$("#borders").click(function(){
  if($("#borders:checked").val()){
    drawDarkAroundKommuneBorder();
  }else{
    removeDrawnBorder();
  }
})

function getSourceObj(geojson, name){
  var sourceObj= {
    "type": "geojson",
    "data": geojson
  };
  return sourceObj;
}
function getLayerObj(name){
  var color="rgba(36, 35, 36, 0.16)";
  if(mapStyle==="aerial"){
    color="rgba(206, 206, 210, 0.3)";
  }
  var lObj= {
    "id": name,
    "type": "fill",
    "source": name,
    "source-layer": name,
    "paint": {
      "fill-color": color
    }
  };
  return lObj;
}

function makeGeojsonFeature(coordinatesObj){
  var coordArr=[];
  //TODO: tror det er det andre arrayet, ikke sikker hva det første er fra
  //var obj=(coordinatesObj[0]);
  var obj=(coordinatesObj[0]);
  if(coordinatesObj[0] != undefined){
    var list=(coordinatesObj[0].Positions);
  } else{
    var list=(coordinatesObj.Positions);
  }
  for(var i=0; i<list.length; i++){
    var el=list[i];
    var coordElementArr=[];
    var x= el.X;
    var y= el.Y;
    coordElementArr.push(x);
    coordElementArr.push(y);
    coordArr.push(coordElementArr);
  }
  //add first coordinates at end as well
  var coordEl=[list[0].X, list[0].Y];
  coordArr.push(coordEl);

  var geo={
    "type": "Feature",
    "properties":{},
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [[
        coordArr
      ]]
    }
  }
  return geo;
}

function getBboxExpanded(){
  var pol=getBBoxPol();
  var newPol=turf.buffer(pol, 5, 'meter');
  return newPol.features[0];
  // return pol;
}


//Change Municipality- mapmove
var kommuneList;
var first=true;

map.on('moveend', function () {
  if(map.getZoom()>=9.5){
    console.log("Selecting kommune cause of zoom level");
    selectKommune();
    //wait for select kommune to finish, otherwise we wont know what to set header to
    setTimeout(function(){
      updateTopKommuneHeader();
    }, 500);
  }else if(menuState.chosenKommuneId!=false){ //if kommune is active, and you zoom out
    console.log("unselecting kommune pga zoom level");
    unselectKommune();
    removeTopKommuneHeader();
    //if aerial, remove aerial raster
    if(menuState.mapStyle==="aerial"){
      removeAerialRaster();
    }
  }
});

function updateTopKommuneHeader(){
  if(menuState.chosenKommuneId!=false && menuState.sideNavOpen==false){
    if(document.getElementById("kommuneTopHeader")==undefined){
      //set kommune name header on top nav
      setTopKommuneHeader();
      menuState.topHeader=true;
    }else{ //update it
      removeTopKommuneHeader();
      setTopKommuneHeader();
    }
  }else if(menuState.sideNavOpen==true){
    removeTopKommuneHeader();
  }
}

function setTopKommuneHeader(){
  var kommuneName=document.getElementById("kommunekart-menu-button").children[2].cloneNode(true);
  var kommuneIcon=document.getElementById("kommunekart-menu-button").children[1].cloneNode(true);
  var div=document.createElement("div");
  div.id="kommuneTopHeader";
  div.appendChild(kommuneIcon);
  div.appendChild(kommuneName);
  div.addEventListener("click", function(){
    toggleSideMenu();
  });
  document.getElementById('navbar-top').insertBefore(div, document.getElementById("side-menu-toggle"));
}
function removeTopKommuneHeader(){
  $("#kommuneTopHeader").remove();
}

function selectKommune(){
  var lat = map.getCenter().lat;
  var lng = map.getCenter().lng;
  var adressUrl= "https://kommunekart.com/api/WebPublisher/ReverseGeoCode?x="+lat+"&y="+lng+"&apiRoute=api%2FWebPublisher%2FReverseGeoCode&appId=Kommunekart";
  $.ajax({
    url: adressUrl,
    complete: function(res){
      var result = JSON.parse(res.responseText).ReverseGeocodeResult.MunicipalityInfo
      var kommuneId=result.Number;
      if(kommuneId===menuState.chosenKommuneId){
        return; //do nothing
      }
      var kommuneNavn=result.Name;
      kommuneList=document.getElementById("kommuneList").children[1].children;
      var target;
      for(var i=0; i<kommuneList.length;i++){
        var el=kommuneList[i];
        if(el.children[0].getAttribute("nr")===kommuneId){
          target=el.firstChild;
          setKommuneMenuHeader(target, kommuneNavn, true);
          resetRasterOverlays();
          setRasterOverlayMenu(kommuneId);
          menuState.chosenKommuneId=kommuneId;
          menuState.type="raster";
        }
      }
    }
  });
}

//adding pitch controller
document.getElementById("pitchUp").addEventListener("click", function(){
  pitchMap("up");
});
document.getElementById("pitchDown").addEventListener("click", function(){
  pitchMap("down");
});

function pitchMap(direction){ //pitch goes from 60 to 0
  if(direction==="up" && map.getPitch()<50){
    map.setPitch(map.getPitch()+10);
  }else if(direction==="down" && map.getPitch()>10){
    map.setPitch(map.getPitch()-10);
  }
}

function zoomToWholeMunicipality(){
  map.flyTo({
    zoom:10,
    center: menuState.activeKommuneMiddle
  });
}
function zoomToCenterOfMunicipality(){
  map.flyTo({
    zoom:13,
    center: menuState.activeKommuneCenter
  });
}
