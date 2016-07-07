var menuState={
  "kommuneMenuOpen": false, //true
  "type": "kommune", //raster
  "chosenKommuneId": false, //id to active kommune
  "sideNavOpen":true,
  "infoSidebarStatus":false
};

var mapmodus = "popup";
var mapStyle = "normal";
var osmActive=true;
var kommuneObjectList={};
var kommune;

mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vpbm8iLCJhIjoiOE5oc094SSJ9.DHxjhFy2Ef33iP8yqIm5cA';
var map = new mapboxgl.Map({
  container: 'map',
  //style: '../mapTest2.json',
  //style:"mapbox://styles/keino/cio2gxo6b000wc7m7xfh2z02o",
  style:layers,
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


function mapMoveEvent(){
  // console.log("running");
  //check border intersection between norway and bounding box of the view
  var bboxPol= getBBoxPol();
  var norwayPol=norBorder.features[0];
  var difference=turf.erase(bboxPol, norwayPol);
  if(difference==undefined && osmActive){ //i norge, osm på --> skru av
    // console.log("turning off osm");
    toggleOSM(false); //turn off
    osmActive=false;
  }else if(difference!=undefined && osmActive ==false){ //difference defined, meaning some of bbox outside norway, osm off --> turn on osm
    // console.log("turning on osm");
    toggleOSM(true); //turn on
    osmActive=true;
  }else{
    //do nothing
  }
}

map.on('move', throttle(mapMoveEvent, 500)); //make sure it doesn't run too often

function toggleOSM(visible){ //change visibility for open street map layers depending on "visible" value
  var layerList=layers.layers;
  var osmGroup="1452169018974.0132";
  for(var i=0; i<layerList.length; i++){
    var layer=layerList[i];
    if(layer.metadata){
      if(layer.metadata["mapbox:group"] === osmGroup){
        if(visible){// make layers visible
          map.setLayoutProperty(layer.id, 'visibility', 'visible');
        }else{
          // console.log("change layer to visibility none:");
          map.setLayoutProperty(layer.id, 'visibility', 'none');
          map.getLayoutProperty(layer.id, 'visibility');
        }
      }
    }
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

function startMeasureModus(){
  mapmodus = "measure";
  // GeoJSON object to hold our measurement features
  var geojson = {
    "type": "FeatureCollection",
    "features": []
  };
  addMeasurementsLayerToMap(geojson);

  //click during measurements
  map.on('click', function(e) {
    var linestring = {
      "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": []
      }
    };

    doMeasurementCalcs(e, geojson, linestring);
    addMeasurementInfoToContainer(e, linestring);
    map.getSource('geojson').setData(geojson);
  });

  map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['measure-points'] });
    // UI indicator for clicking/hovering a point on the map
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : 'crosshair';
    $('#distance').css({
      left:  e.point.x+2,
      top:   e.point.y+2
    });
  });
}


function doMeasurementCalcs(e, geojson, linestring){

  var features = map.queryRenderedFeatures(e.point, { layers: ['measure-points'] });

  // Remove the linestring from the group
  // So we can redraw it based on the points collection
  if (geojson.features.length > 1) geojson.features.pop();

  var distanceContainer = document.getElementById('distance');
  // Clear the Distance container to populate it with a new value
  distanceContainer.innerHTML = '';

  // If a marker was clicked, remove it from the
  if (features.length) {
    var id = features[0].properties.id;
    geojson.features = geojson.features.filter(function(point) {
      return point.properties.id !== id;
    });
  } else {
    var point = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          e.lngLat.lng,
          e.lngLat.lat
        ]
      },
      "properties": {
        "id": String(new Date().getTime())
      }
    };

    geojson.features.push(point);
  }

  if (geojson.features.length > 1) {
    linestring.geometry.coordinates = geojson.features.map(function(point) {
      return point.geometry.coordinates;
    });

    geojson.features.push(linestring);


  }
}

function addMeasurementInfoToContainer(e, linestring){
  // Used to draw a line between points


  var distanceContainer = document.getElementById('distance');

  // Populate the distanceContainer with total distance
  var value = document.createElement('pre');
  value.textContent = 'Total distance: ' + turf.lineDistance(linestring).toLocaleString() + 'km';
  distanceContainer.appendChild(value);
}

function addMeasurementsLayerToMap(geojson){
  map.addSource('geojson', {
    "type": "geojson",
    "data": geojson
  });

  // Add styles to the map
  map.addLayer({
    id: 'measure-points',
    type: 'circle',
    source: 'geojson',
    paint: {
      'circle-radius': 5,
      'circle-color': 'rgb(97, 73, 241)'
    },
    filter: ['in', '$type', 'Point']
  });
  map.addLayer({
    id: 'measure-lines',
    type: 'line',
    source: 'geojson',
    layout: {
      'line-cap': 'round',
      'line-join': 'round'
    },
    paint: {
      'line-color': 'rgb(97, 73, 241)',
      'line-width': 2.5
    },
    filter: ['in', '$type', 'LineString']
  });
}

//called when kommune is clicked
function flyTo(){
  var kommune=kommuneObjectList[menuState.chosenKommuneId];
  var zoomTo=kommune.StartZoom;
  if(zoomTo==-1){
    zoomTo=14;
  }
  var startEast=kommune.StartEast;
  if(startEast==0){
    //find middle point of bounding box
    startEast= kommune.West + ((kommune.East-kommune.West)/2);
  }
  var startNorth=kommune.StartNorth;
  if(startNorth==0){
    startNorth = kommune.South + ((kommune.North-kommune.South)/2);
  }
  map.flyTo({
    center:[startEast,startNorth],
    // zoom:zoomTo-5
    zoom:10
  });
}

function toggleSlideOfMapCtrl(){
  if( $(".mapboxgl-ctrl-group").hasClass("ctrl-slide-out") ){
    $(".mapboxgl-ctrl-group").removeClass("ctrl-slide-out");

  }else{
    $(".mapboxgl-ctrl-group").addClass("ctrl-slide-out");
  }
}

//Adding popup info
map.on('click', function (e) {
  // console.log(mapmodus);
  // Populate the popup and set its coordinates
  //var utmCoord=getUTMCoordinates(e.lngLat.lat, e.lngLat.lng);
  //var utmString=_makeUtmCoordinateString(utmCoord.lat, utmCoord.lng);
  if(mapmodus === "popup"){
    if(!menuState.infoSidebarStatus){
      if(menuState.sideNavOpen){
        $("#menu-selector").toggleClass("sidenavOpen");
        menuState.sideNavOpen = false;
      }
      menuState.infoSidebarStatus = true;
      $("#infoSidebar").toggleClass("sidenavOpen");
      toggleSlideOfMapCtrl();
    }
    updateAdress(e.lngLat.lng,e.lngLat.lat,
      function(result){
        var result = JSON.parse(result.responseText).ReverseGeocodeResult;
        // console.log(result.MunicipalityInfo.Name);
        // console.log(result.NearestAddress.House);
        // if(result.MunicipalityInfo.Name==kommune){
        //   return;
        // }
        document.getElementById("adresse").innerHTML="";

        if(result.NearestAddress==null){
          var kommuneNavn = document.createElement("h3");
          kommuneNavn.id="kommuneNavn";
          kommuneNavn.innerHTML = result.MunicipalityInfo.Name + " kommune";
          document.getElementById("adresse").appendChild(kommuneNavn);
        }else{
          console.log(result.MunicipalityInfo.Name);
          var punktAdresse = document.createElement("li");
          punktAdresse.id="punktAdresse";
          punktAdresse.innerHTML = result.NearestAddress.House;
          var postnr = document.createElement("li");
          postnr.id="punktPostnr";
          postnr.innerHTML = result.NearestAddress.Zip + " "+ result.NearestAddress.PostalPlace;
          var distance = document.createElement("li");
          distance.id="distance";
          distance.innerHTML = "Avstand til adresse: "+result.NearestAddress.Distance.toFixed(0)+" m";
          // kommuneElement.id=i+"element";
          var kommuneDiv=document.createElement("div");
          document.getElementById("adresse").appendChild(punktAdresse);
          document.getElementById("adresse").appendChild(postnr);
          document.getElementById("adresse").appendChild(distance);
        }
        getCapabilitiesForSideMenu(result.MunicipalityInfo.Number, e.lngLat.lat, e.lngLat.lng);
      }
    );
    var latLngString="WGS 84: "+(e.lngLat.lat.toFixed(5))+"°N,  "+(e.lngLat.lng.toFixed(5))+"°Ø";
    $("#WGSKoordinater").text(latLngString);

    // getHeightAboveSeaLevel(e.lngLat.lat,e.lngLat.lng);
    getUTMCoordinates(e.lngLat.lat,e.lngLat.lng,
      function(result){
        var result = JSON.parse(result.responseText).coordinate;
        console.log(result.north);
        var utmString = "UTM 32N: "+result.north.toFixed(1) +"N, "+result.east.toFixed(1)+"Ø";
        $("#UTMKoordinater").text(utmString);
      }
    );
    getHeightAboveSeaLevel(e.lngLat.lat,e.lngLat.lng,
      function(result){
        var result = JSON.parse(result.responseText).valuelist[0].v;
        $("#heightAboveSea").text(result.toFixed(0)+ " m.o.h");
      }
    );

    if(map.getLayer("marker")!==undefined){
      map.removeLayer("marker");
      map.removeSource("marker");
    }
    // console.log("skal adde source");
    console.log("skal adde source");
    //Adder marker
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
            "icon-image": "test4"
        }
    });
    console.log("adder marker");
  }
  else{
    return false;
  }
});

function changeBackgroundMap(maptype) {
  var layerId = layer.target.id;
  //map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
  console.log(flyfoto);
  map.setStyle(flyfoto);
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
map.on('moveend', throttle(drawDarkAroundKommuneBorder, 500));

function drawDarkAroundKommuneBorder(){
  var name="outsideKommune";
  // console.log(kommuneElementClicked);
  // console.log(map.getZoom());
  if(map.getZoom()<=9.5){ //checking if kommuneElementClicked, because if so zoom level changed after this check is done, and area will not be drawn
    //if area drawn, remove it:
    // console.log("not drawing area, removing if zoomed out");
    if(map.getLayer(name)!=undefined){
      map.removeSource(name);
      map.removeLayer(name);
      currentKommune=false;
    }
    return;
  }
  var lat = map.getCenter().lat;
  var lng = map.getCenter().lng;
  var url="http://www.webatlas.no/wacloudtest/servicerepository/GeoNameService.svc/json/FindMunicipalityWithGeometry?srs=EPSG:4326&east="+lng+"&north="+lat;
  $.ajax({
    url:url
  }).done(function(res){
    if(currentKommune===res.Name && map.getLayer(name)!=undefined){//same as last kommune and something is drawn
      // console.log("same kommune");
      // console.log(res.Name);
      return; //do nothing if still inside same kommune
    }
    var bboxExpanded=getBboxExpanded();
    // console.log(bboxExpanded);
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


function getSourceObj(geojson, name){
  var sourceObj= {
    "type": "geojson",
    "data": geojson
  };
  return sourceObj;
}
function getLayerObj(name){
  var lObj= {
    "id": name,
    "type": "fill",
    "source": name,
    "source-layer": name,
    "paint": {
      "fill-color": "rgba(36, 35, 36, 0.20)"
    }
  };
  return lObj;
}

function makeGeojsonFeature(coordinatesObj){
  // console.log(coordinatesObj);
  var coordArr=[];
  //TODO: tror det er det andre arrayet, ikke sikker hva det første er fra
  //var obj=(coordinatesObj[0]);
  var obj=(coordinatesObj[0]);
  // console.log(obj);
  var list=(coordinatesObj[0].Positions);
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

  // console.log(coordArr);
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
  // console.log((geo));
  return geo;
}

function getBboxExpanded(){
  var pol=getBBoxPol();
  // console.log(pol);
  var newPol=turf.buffer(pol, 5, 'meter');
  // console.log(JSON.stringify(newPol.features[0]));
  return newPol.features[0];
  // return pol;
}


//Change Municipality- mapmove
var kommuneList;
var first=true;

map.on('moveend', function () {
  if(map.getZoom()>=9.5){
    selectKommune();
    console.log("selectKommune() started");
    //wait for select kommune to finish, otherwise we wont know what to set header to
    setTimeout(function(){
      updateTopKommuneHeader();
    }, 500);
  }else if(menuState.chosenKommuneId!=false){ //if back click, unselect already happens
    unselectKommune();
    removeTopKommuneHeader();
  }
});

function updateTopKommuneHeader(){
  console.log("update header");
  if(menuState.chosenKommuneId!=false && menuState.sideNavOpen==false){
    console.log("kommune valgt, sidenav lukket");
    if(document.getElementById("kommuneTopHeader")==undefined){
      //set kommune name header on top nav
      console.log("set header!!!!!!!!!");
      setTopKommuneHeader();
      menuState.topHeader=true;
    }else{ //update it
      removeTopKommuneHeader();
      setTopKommuneHeader();
      console.log("remove header");
    }
  }else if(menuState.sideNavOpen==true){
    removeTopKommuneHeader();
  }
}

function setTopKommuneHeader(){
  console.log("set kommune top header");
  var kommuneName=document.getElementById("kommunekart-menu-button").children[2].cloneNode(true);
  console.log(kommuneName);
  var kommuneIcon=document.getElementById("kommunekart-menu-button").children[1].cloneNode(true);
  var div=document.createElement("div");
  div.id="kommuneTopHeader";
  div.appendChild(kommuneIcon);
  div.appendChild(kommuneName);
  console.log(div);
  document.getElementById('navbar-top').insertBefore(div, document.getElementById("searchToggle"));
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
          // console.log("found kommune");
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
