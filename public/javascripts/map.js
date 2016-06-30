
var mapmodus = "popup";
var mapStyle = "normal";
var osmActive=true;

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
  console.log("running");
  //check border intersection between norway and bounding box of the view
  var bboxPol= getBBoxPol();
  var norwayPol=norBorder.features[0];
  var difference=turf.erase(bboxPol, norwayPol);
  if(difference==undefined && osmActive){ //i norge, osm på --> skru av
    console.log("turning off osm");
    toggleOSM(false); //turn off
    osmActive=false;
  }else if(difference!=undefined && osmActive ==false){ //difference defined, meaning some of bbox outside norway, osm off --> turn on osm
    console.log("turning on osm");
    toggleOSM(true); //turn on
    osmActive=true;
  }else{
    //do nothing
  }
}


map.on('move', throttle(mapMoveEvent, 500));


var testPol={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.148429528000065,
              -28.29755210099995
            ],
            [
              26.148582685000065,
              -28.29778390599995
            ],
            [
              26.149207731000047,
              -28.29773837299996
            ],
            [
              26.14925541100007,
              -28.297771688999944
            ],
            [
              26.149255844000038,
              -28.297773261999964
            ],
            [
              26.149276505000046,
              -28.29784835099997
            ],
            [
              26.14928482700003,
              -28.29787859399994
            ],
            [
              26.14928916200006,
              -28.29800647199994
            ],
            [
              26.14931069800008,
              -28.298641791999955
            ],
            [
              26.149339971000074,
              -28.298641232999955
            ],
            [
              26.151298488000066,
              -28.29860385099994
            ],
            [
              26.151290002000053,
              -28.298628995999934
            ],
            [
              26.151417002000073,
              -28.299308003999954
            ],
            [
              26.15159000400007,
              -28.299739003999946
            ],
            [
              26.151951998000072,
              -28.30051100299994
            ],
            [
              26.15206407200003,
              -28.30076885099993
            ],
            [
              26.152066543000046,
              -28.30077453499996
            ],
            [
              26.151987021000025,
              -28.300799009999935
            ],
            [
              26.149896693000073,
              -28.301442350999935
            ],
            [
              26.150354333000053,
              -28.30260575099993
            ],
            [
              26.14914131000006,
              -28.302975170999957
            ],
            [
              26.14836387300005,
              -28.302853868999932
            ],
            [
              26.147575408000023,
              -28.30269948399996
            ],
            [
              26.146257624000043,
              -28.302462392999928
            ],
            [
              26.14557943400007,
              -28.302181192999967
            ],
            [
              26.145492669000078,
              -28.302154609999945
            ],
            [
              26.144921243000056,
              -28.303395982999973
            ],
            [
              26.14482272200007,
              -28.30455853999996
            ],
            [
              26.14431040900007,
              -28.30451913099995
            ],
            [
              26.14429070400007,
              -28.304144747999942
            ],
            [
              26.143837504000032,
              -28.304144747999942
            ],
            [
              26.143613499000026,
              -28.304592757999956
            ],
            [
              26.14346312200007,
              -28.304893512999968
            ],
            [
              26.143260178000048,
              -28.304893512999968
            ],
            [
              26.143246374000057,
              -28.304893512999968
            ],
            [
              26.143147852000027,
              -28.304893512999968
            ],
            [
              26.14295080900007,
              -28.304834399999947
            ],
            [
              26.14200500000004,
              -28.30449942699994
            ],
            [
              26.14198529600003,
              -28.304420608999976
            ],
            [
              26.141525339000054,
              -28.304298579999966
            ],
            [
              26.141019783000047,
              -28.30416445299994
            ],
            [
              26.141118305000077,
              -28.304637356999933
            ],
            [
              26.140940966000073,
              -28.30512996599998
            ],
            [
              26.140376789000072,
              -28.306172836999963
            ],
            [
              26.140476282000066,
              -28.30621363399996
            ],
            [
              26.14041675800007,
              -28.306326533999936
            ],
            [
              26.140146555000058,
              -28.30640398099996
            ],
            [
              26.140073975000064,
              -28.306410747999962
            ],
            [
              26.137315367000042,
              -28.305189078999945
            ],
            [
              26.136645419000047,
              -28.304854104999947
            ],
            [
              26.135719315000074,
              -28.30451913099995
            ],
            [
              26.135515376000058,
              -28.304330879999952
            ],
            [
              26.13546315800005,
              -28.304282678999982
            ],
            [
              26.13558800000004,
              -28.30419999999998
            ],
            [
              26.137463000000025,
              -28.30242899999996
            ],
            [
              26.13794500000006,
              -28.30202799999995
            ],
            [
              26.13796479100006,
              -28.30201049699997
            ],
            [
              26.147913396000035,
              -28.296966331999954
            ],
            [
              26.148429528000065,
              -28.29755210099995
            ]
          ]
        ]
      }
    }
  ]
};


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
        console.log("change layer to visibility none:");
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
function flyTo(kommuneIndex){
  var kommune=kommuneList[kommuneIndex];
  // console.log(kommune);
  var zoomTo=kommune.StartZoom;
  if(zoomTo==-1){
    zoomTo=14;
  }
  console.log("zoomTo");
  // console.log(zoomTo);
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
  // console.log(startNorth);
  // console.log(startEast);

  map.flyTo({
    center:[startEast,startNorth],
    zoom:zoomTo-5
  });
}

//Adding popup info
map.on('click', function (e) {
  // console.log(mapmodus);
  // Populate the popup and set its coordinates
  //var utmCoord=getUTMCoordinates(e.lngLat.lat, e.lngLat.lng);
  //var utmString=_makeUtmCoordinateString(utmCoord.lat, utmCoord.lng);
  var adresse;
  var postnr;
  if(mapmodus === "popup"){
    updateAdress(e.lngLat.lng,e.lngLat.lat,
      function(result){
        var result = JSON.parse(result.responseText).ReverseGeocodeResult;
        console.log(result.NearestAddress.MunicipalityNo);
        adresse = result.NearestAddress.House;
        console.log(result.NearestAddress.Zip);
        console.log(result.NearestAddress.PostalPlace);
        postnr = result.NearestAddress.Zip + " "+ result.NearestAddress.PostalPlace;
        distance =result.NearestAddress.Distance;
        $("#punktAdresse").text(adresse);
        $("#punktPostnr").text(postnr);
        $("#punktDistance").text(distance +" m");
      }
    );

    // var lat =
    var latLngString="WGS 84: "+(e.lngLat.lat.toFixed(5))+"°N,  "+(e.lngLat.lng.toFixed(5))+"°Ø";
    $("#WGSKoordinater").text(latLngString);
    // getHeightAboveSeaLevel(lat,long);

    if(map.getLayer("marker")!==undefined){
      map.removeLayer("marker");
      map.removeSource("marker");
    }
    console.log("skal adde source");
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
        "icon-image": "marker-15",
      }
    });
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


//HVORFOR virker ikke dette??
function updateAdress(longitude, latitude, callback){
  var adressUrl= "https://kommunekart.com/api/WebPublisher/ReverseGeoCode?x="+latitude+"&y="+longitude+"&apiRoute=api%2FWebPublisher%2FReverseGeoCode&appId=Kommunekart";
  $.ajax({
    url: adressUrl,
    complete: callback
  });
  console.log("utenfor");
}
