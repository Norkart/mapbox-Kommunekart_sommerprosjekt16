var measure={
  geojson:{// GeoJSON object to hold our measurement features
    "type": "FeatureCollection",
    "features": []
  }
};

measure.start=function(){
  mapmodus = "measure";
  measure.addMeasurementsLayerToMap();

  //click during measurements
  map.on('click', function(e) {
    measure.clickevent(e);
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

measure.stop=function(){
  mapmodus="popup";
}

measure.clickevent=function(e){
  var linestring = {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": []
    }
  };
  measure.doMeasurementCalcs(e, linestring);
  measure.addMeasurementInfoToContainer(e, linestring);
  map.getSource('geojson').setData(measure.geojson);
}


measure.doMeasurementCalcs=function(e, linestring){
  var features = map.queryRenderedFeatures(e.point, { layers: ['measure-points'] });
  // Remove the linestring from the group
  // So we can redraw it based on the points collection
  if (measure.geojson.features.length > 1) measure.geojson.features.pop();

  var distanceContainer = document.getElementById('distance');
  // Clear the Distance container to populate it with a new value
  distanceContainer.innerHTML = '';

  // If a marker was clicked, remove it from the
  if (features.length) {
    var id = features[0].properties.id;
    measure.geojson.features = measure.geojson.features.filter(function(point) {
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
    measure.geojson.features.push(point);
  }
  if (measure.geojson.features.length > 1) {
    linestring.geometry.coordinates = measure.geojson.features.map(function(point) {
      return point.geometry.coordinates;
    });
    measure.geojson.features.push(linestring);
  }
}

measure.addMeasurementInfoToContainer=function(e, linestring){
  // Used to draw a line between points

  var distanceContainer = document.getElementById('distance');

  // Populate the distanceContainer with total distance
  var value = document.createElement('pre');
  value.id="measureInfo"
  value.textContent = 'Total distance: ' + turf.lineDistance(linestring).toLocaleString() + 'km';
  distanceContainer.appendChild(value);
}

measure.addMeasurementsLayerToMap=function(){
  map.addSource('geojson', {
    "type": "geojson",
    "data": measure.geojson
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
