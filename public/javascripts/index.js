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

//add layer with tyle: wms kall
map.on('load', function () {
  console.log("loaded");

  var sourceObj={
    "type":"raster",
    "tiles":[
      "http://www.webatlas.no/wacloud/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers="
      //BAERUM_KART_GISLINE_WMS:Reguleringsplaner,Matrikkelkart"
    ],
    "tileSize":256
      //"http://www.webatlas.no/wacloud/Servicerepository/Combine.aspx?X=69367&Y=38140&Z=17&layers=BAERUM_KART_GISLINE_WMS:Reguleringsplaner,Matrikkelkart"
      //}
  };
  map.addSource("testRaster",sourceObj);
  map.addLayer({
      "id":"testStyle",
      "type":"raster",
      "source":"testRaster",
      "id": "raster_overlay",
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
});

//http://www.webatlas.no/wacloud/Servicerepository/Combine.aspx?X={x}&Y={y}&Z={z}&layers=BAERUM_KART_GISLINE_WMS:Reguleringsplaner,Matrikkelkart

//https://localhost:44367/Combine.aspx?X={x}&Y={y}&Z={z}&layers={layerDef}&userOID={userOID}&accessToken={accessToken}
//https://www.webatlas.no/wacloud/servicerepository/Combine.aspx?QuadKey=120021313021.png&layers=TMS_WEBATLAS_MEDIUM:0;WEBATLAS_ORTOFOTO_HISTORISK:Asker-2002;ASKER_GISLINE_WMS:Barneskolekretser,RPLAN

//https://www.webatlas.no/wacloud/servicerepository/Combine.aspx?X={x}&Y={y}&Z={z}&layers=TMS_WEBATLAS_MEDIUM


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


$.ajax({
  url:"https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetRegisteredAppCustomers?appID=VectortilesDemo",
}).done(function(res){
  console.log(res);
  for(var i=0; i<res.length; i++){
    kommuneList.push(res[i]);
    var kommuner=document.getElementById("kommuneList");
    var kommune=document.createElement("li");
    kommune.id=i;
    //adding on click event
    kommune.addEventListener("click", function(){
      console.log(event.currentTarget);
      flyTo(event.currentTarget.id);
    })

    kommune.className="kommuneElement";
    var kommuneName=document.createElement("h4");
    kommuneName.innerHTML=res[i].Name;
    var kommuneLogo=document.createElement("img");
    kommuneLogo.setAttribute("src", res[i].Logo);
    kommune.appendChild(kommuneLogo);
    kommune.appendChild(kommuneName);
    var arrowDiv=document.createElement("div");
    arrowDiv.id="arrow";
    var arrow=document.createElement("img");
    arrowDiv.appendChild(arrow);
    arrow.setAttribute("src", "https://kommunekart.com/Images/ikoner/nk_025-hoyrepil-B-48px.png")
    kommune.appendChild(arrowDiv);
    kommuner.appendChild(kommune);

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
