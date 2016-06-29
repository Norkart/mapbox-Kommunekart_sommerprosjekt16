
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

// map.on('move', function(){
//   //check border intersection between norway and bounding box of the view
//   var bboxPol= getBBoxPol();
//   var norwayPol=norBorder.features[0];
//   var difference=turf.erase(bboxPol, norwayPol);
//   if(difference==undefined && osmActive){ //i norge, osm på --> skru av
//     console.log("turning off osm");
//     toggleOSM(false); //turn off
//     osmActive=false;
//   }else if(difference!=undefined && osmActive ==false){ //difference defined, meaning some of bbox outside norway, osm off --> turn on osm
//     console.log("turning on osm");
//     toggleOSM(true); //turn on
//     osmActive=true;
//   }else{
//     //do nothing
//   }
// });

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
  console.log(mapmodus);
  // Populate the popup and set its coordinates
  //var utmCoord=getUTMCoordinates(e.lngLat.lat, e.lngLat.lng);
  //var utmString=_makeUtmCoordinateString(utmCoord.lat, utmCoord.lng);
  if(mapmodus === "popup"){
    var latLngString="WGS 84: "+(e.lngLat.lat.toFixed(5))+"°N,  "+(e.lngLat.lng.toFixed(5))+"°Ø";
    var popup = new mapboxgl.Popup()
    //e.point: x and y for point
    .setLngLat(e.lngLat)
    .setHTML(latLngString)
    .addTo(map);
  }
  else{
    return false;
  }
});

function changeBackgroundMap(maptype) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
}
