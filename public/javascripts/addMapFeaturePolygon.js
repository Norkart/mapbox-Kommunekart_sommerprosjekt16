function makeCompressedPolygon(points) {
    var latitude = 0;
    var longitude = 0;
    var result = [];
    var l;

    for (var point in points ) {
        // step 2
        var newLatitude = Math.round(points[point][0] * 100000);
        var newLongitude = Math.round(points[point][1] * 100000);

        // step 3
        var dy = newLatitude - latitude;
        var dx = newLongitude - longitude;
        latitude = newLatitude;
        longitude = newLongitude;

        // step 4 and 5
        dy = (dy << 1) ^ (dy >> 31);
        dx = (dx << 1) ^ (dx >> 31);

        // step 6
        var index = ((dy + dx) * (dy + dx + 1) / 2) + dy;

        while (index > 0) {

            // step 7
            var rem = index & 31;
            index = (index - rem) / 32;

            // step 8
            if (index > 0) rem += 32;

            // step 9
            result.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-"[rem]);
        }
    }

    console.log(result);
    return result.join("");
    console.log("kompressed polygon: "+ result);
}

function addRasterPolygon(layers, coord){
  console.log("skal adde rasterpolygon");
  var currCoord =getValidCoordString(coord);
  console.log(currCoord);
  var adressUrl= ": http://webutvikling.gisline.no/FeatureMaskService/default.aspx?X={x}&Y={y}&Z={z}&layers="
  adressUrl += layerArea;
  adressUrl += ":";
  adressUrl += layers;
  adressUrl += "&POLYGON=";
  adressUrl += makeCompressedPolygon(currCoord);
  // console.log(adressUrl);
  // addRaster(adressUrl, "Nina", 10);
  //TODO: Finn ut hvorfor CORS error ved addRaster
}

function getValidCoordString(coord){
  var currCoord ="";
  var list = coord.Positions;
  for(var i=0; i<list.length; i++){
    var el=list[i];
    currCoord += el.X;
    currCoord += ",";
    currCoord += el.Y;
    currCoord += ",";
  }
  currCoord = currCoord.substring(0, currCoord.length-1);
  return currCoord;
}
