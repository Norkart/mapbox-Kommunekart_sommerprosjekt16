var activeFeaturePolygons=[];
var layerArea; //name for url for area of different layers
var layerName; //end of url for specific raster layer
function makeCompressedPolygon(points) {
    var latitude = 0;
    var longitude = 0;
    var result = [];
    // var result="";
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

    return result.join("");
}

function addRasterPolygon(layers, coord){
  console.log("Adder rasterpolygon");
  console.log(layerArea);
  console.log(GFI.layerAreas);
  var currCoord =getValidCoordString(coord);
  var adressUrl= "http://webutvikling.gisline.no/FeatureMaskService/default.aspx?X={x}&Y={y}&Z={z}&layers="
  adressUrl += GFI.layerAreas[0];
  adressUrl += ":";
  adressUrl += layers;
  adressUrl += "&POLYGON=";
  adressUrl += makeCompressedPolygon(currCoord);
  if(hasPolygon(layers+"Raster")){
    removeFeatreRasterPolygon(layers);
    // removeRaster(layers+"Raster");
    // removeElementInList(activeFeaturePolygons,layers);
  }
  raster.addNew(adressUrl, layers+"Raster", 8);
  activeFeaturePolygons.push(layers);
  console.log(activeFeaturePolygons);
  //TODO: Finn ut hvorfor CORS error ved addRaster
}

function getValidCoordString(coord){
  var list = coord.Positions;
  var currCoords=list.map(function fix(listElement){
    return [listElement.Y, listElement.X];
  });
  return currCoords;
}

function removeFeatreRasterPolygon(name){
  raster.remove(name+"Raster");
  removeElementInList(activeFeaturePolygons,name);
}
// function getValidCoordString(coord){
//   var currCoord ="";
//   var list = coord.Positions;
//   for(var i=0; i<list.length; i++){
//     var el=list[i];
//     currCoord += el.Y;
//     currCoord += ",";
//     currCoord += el.X;
//     currCoord += ",";
//   }
//   currCoord = currCoord.substring(0, currCoord.length-1);
//   return currCoord;
// }
