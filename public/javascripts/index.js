mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vpbm8iLCJhIjoiOE5oc094SSJ9.DHxjhFy2Ef33iP8yqIm5cA';
var map = new mapboxgl.Map({
  container: 'map',
  //style: '../mapTest2.json',
  style:"mapbox://styles/keino/cio2gxo6b000wc7m7xfh2z02o",
  center:[13,65],
  zoom:4.5
});

map.addControl(new mapboxgl.Navigation({position: 'bottom-right'}));
map.addControl(new mapboxgl.Geolocate({position: 'bottom-right'}));



var kommuneList=[];

document.getElementById("sprite-chevron-down").addEventListener("click", function(){
  $("#kommuneList").toggleClass("dropdownVisible");
  $("#menu-selector").removeClass("sidenavOpen");
  $("#kommuneListPointer").toggleClass("pointer-down pointer-up");

});

$('.kommunekart-logo').click(function(){
  window.open("http://www.norkart.no/");
});

function getMap(){
  return map;
}

document.getElementById("choose-kommune-menu").addEventListener("click", function(){

  $("#menu-selector").toggleClass("sidenavOpen");

  if($("#kommuneList").is(":visible")){
    $("#kommuneList").removeClass("dropdownVisible");
    $("#kommuneListPointer").toggleClass("pointer-down pointer-up");
  }
});


function updateRasterView(name, layerArea){
  removeRaster("rasterOverlay", activeLayerNames);
  var layerString=activeLayerNames[0]; //Adding first layer here to be able to add a comma before each insertion inside the for loop

  if(activeLayerNames.length>0){
    for(var i=1; i<activeLayerNames.length; i++){
      layerString+=","+activeLayerNames[i];
    }
    var wmsUrl="http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers="+layerArea+":"+layerString;
    console.log(wmsUrl);
    addRaster(wmsUrl, "rasterOverlay");
  }else{
    console.log("no active layers - nothing added");
  }
}

function removeRaster(name){
  console.log("removing raster");
  if(map.getSource(name)!==undefined){
    map.removeSource(name);
    map.removeLayer(name);
    return true;
  }else{
    console.log("no raster to delete");
    return false;
  }
}


function addRaster(url, name){
  console.log("adding raster");
  var sourceObj={
    "type":"raster",
    "tiles":[url],
    "tileSize":256
  };
  map.addSource(name,sourceObj);
  map.addLayer({
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
    "minzoom": 0,
    "maxzoom": 22
  });
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


var activeLayerNames=[];

function resetRasterOverlays(){
  activeLayerNames=[];
  var kommuneElements=document.getElementsByClassName('kommuneElement');

  //delete layerList for kommune with "open" raster menu
  var list=document.getElementById("layerList");
  console.log(list);
  if(list){
    list.parentNode.removeChild(list);
  }

  removeRaster("rasterOverlay");
}


function setRasterOverlayMenu(kommuneId, idFordomKommuneListElement){

  var layersUrl="https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetCapabilities?applicationID=Web-VectortilesDemo-"+kommuneId;
  console.log(layersUrl);

  var layerArea; //name for url for area of different layers
  var layerName; //end of url for specific raster layer
  $.ajax({
    url:layersUrl
  }).done(function(res){
    var rasterMenu=document.createElement("ul");
    rasterMenu.id="layerList";
    console.log(res);
    layerArea=res[0].Name;
    for(var i=0; i<res[0].Layers.length; i++){
      var rasterElement = document.createElement("li");
      layerName=res[0].Layers[i].Name;
      rasterElement.setAttribute("name",layerName);
      rasterElement.setAttribute("area",layerArea);
      rasterElement.setAttribute("active", false);
      rasterElement.innerHTML=layerName;

      rasterElement.addEventListener("click", function(){
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
      });
      //adding raster element to raster list:
      rasterMenu.appendChild(rasterElement);
    }
    //adding the raster overlays list two kommune element
    document.getElementById(idFordomKommuneListElement).appendChild(rasterMenu);
  });
}

$.ajax({
  url:"https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetRegisteredAppCustomers?appID=VectortilesDemo",
}).done(function(res){
  console.log(res);
  for(var i=0; i<res.length; i++){
    kommuneList.push(res[i]);

    var kommuneElement=document.createElement("li");
    kommuneElement.className="kommuneElement";
    kommuneElement.id=i+"element";

    var kommuneDiv=document.createElement("div");
    kommuneDiv.id=i;
    kommuneDiv.setAttribute("nr", res[i].Number);
    //adding on click event for choosing kommune - fly to and create menu
    kommuneDiv.addEventListener("click", function(){
      console.log(event.currentTarget);
      flyTo(event.currentTarget.id);
      resetRasterOverlays();
      setRasterOverlayMenu(event.currentTarget.getAttribute("nr"), event.currentTarget.id+"element");
    });

    var kommuneName=document.createElement("h4");
    kommuneName.innerHTML=res[i].Name;
    var kommuneLogo=document.createElement("img");
    kommuneLogo.setAttribute("src", res[i].Logo);
    //var arrow=document.createElement("img");
    //arrow.setAttribute("src", "https://kommunekart.com/Images/ikoner/nk_025-hoyrepil-B-48px.png")
    //var arrowDiv=document.createElement("div");
    //arrowDiv.appendChild(arrow);
    //arrowDiv.id="arrow";

    kommuneDiv.appendChild(kommuneLogo);
    kommuneDiv.appendChild(kommuneName);
    //kommuneDiv.appendChild(arrowDiv);
    kommuneElement.appendChild(kommuneDiv);

    var kommuner=document.getElementById("kommuneList");
    kommuner.appendChild(kommuneElement);
  }

});

function flyTo(kommuneIndex){
  var kommune=kommuneList[kommuneIndex];
  console.log(kommune);
  var zoomTo=kommune.StartZoom;
  if(zoomTo==-1){
    zoomTo=14;
  }
  console.log("zoomTo");
  console.log(zoomTo);
  var startEast=kommune.StartEast;
  if(startEast==0){
    //find middle point of bounding box
    startEast= kommune.West + ((kommune.East-kommune.West)/2);
    console.log(startEast);
  }
  var startNorth=kommune.StartNorth;
  if(startNorth==0){
    startNorth = kommune.South + ((kommune.North-kommune.South)/2);
  }
  console.log(startNorth);
  console.log(startEast);

  map.flyTo({
    center:[startEast,startNorth],
    zoom:zoomTo-5
  });
}


//Adding popup info
map.on('click', function (e) {
  console.log("popup please");
  // Populate the popup and set its coordinates

  //var utmCoord=getUTMCoordinates(e.lngLat.lat, e.lngLat.lng);
  //var utmString=_makeUtmCoordinateString(utmCoord.lat, utmCoord.lng);

  var latLngString="WGS 84: "+(e.lngLat.lat.toFixed(5))+"°N,  "+(e.lngLat.lng.toFixed(5))+"°Ø";

  var popup = new mapboxgl.Popup()
  //e.point: x and y for point
  .setLngLat(e.lngLat)
  .setHTML(latLngString)
  .addTo(map);
});



//Getting correct coordinates
function getUTMCoordinates(lat, lng){
  var epsg = cpc.const.epsg[utm];

  if (cpc.const.countryCodes.NORWAY === countryCode) {

    var municpipalityNumber = this._geoCoder.getMunicipalityNumber();
    var countyNumber = municpipalityNumber.substr(0, 2); // two first numbers of municipality number
    var utm = cpc.const.countyToUtm[countyNumber];
    var utmOutput = cpc.const.utmOutput[utm];
    var epsg = cpc.const.epsg[utm];

    // add temp loading text
    var coordContainer = L.DomUtil.create('li', "kommunekart-popup-list-utm");
    var startText = utmOutput + "N" + ": laster..";
    coordContainer.style.width = "195px"; // set width to avoid resizing later
    coordContainer.appendChild(document.createTextNode(startText));
    container.appendChild(coordContainer);



    var lat = this._latlng.lat;
    var lng = this._latlng.lng;

    cpc.util.transformation.transformCoordAsync(lat, lng, cpc.const.epsg.LAT_LNG, epsg, success, failure);

  }
  function success(res) {
    // setTimeout is temp to add some delay to see the spinner

    if (!res && !res.coordinate) {
      failure();
      return;
    }

    var coordinate = res.coordinate;
    var epsg = coordinate.epsg;
    var north = coordinate.north;
    var east = coordinate.east;

    var utm = cpc.const.epsgToUtm[epsg];
    var utmName = cpc.const.utmOutput[utm] + "N";
    var coordinateString = context._makeUtmCoordinateString(north, east, {numberOfDeciamals: 1, isDegrees: false});

    var text = utmName + ": " + coordinateString; // e.x: 123456,7N  12345,6Ø
    context._utmText = text; // expose the text to be able to test it
    coordContainer.innerHTML = "";
    coordContainer.appendChild(document.createTextNode(text));

    context._updateLayout();

  }

}

function _makeUtmCoordinateString(north, east) {
  return this._makeCoordinateString(north, east, { numberOfDecimals: 1, isDegrees: false });
}

function _makeLatLngCoordinateString(north, east) {
  return this._makeCoordinateString(north, east, { numberOfDecimals: 5, isDegrees: true });
}

function _makeCoordinateString(north, east, options) {
  options = options || {};
  var isDegrees = options.isDegrees || false;
  var numberOfDecimals = options.numberOfDecimals || 0;

  var optionalDegreeString = isDegrees ? String.fromCharCode(176) : ""; // String.fromCharCode(176) is the degree sign

  var northString = this._formatCoordinate(north, numberOfDecimals) + optionalDegreeString + "N";
  var eastString =  this._formatCoordinate(east, numberOfDecimals) + optionalDegreeString + "Ø";
  var doubleSpace = "  ";
  return northString + doubleSpace + eastString;
}

function _formatCoordinate(coordinate, numberOfDecimals) {
  return parseFloat(coordinate).toFixed(numberOfDecimals).replace(".", ",");
}
