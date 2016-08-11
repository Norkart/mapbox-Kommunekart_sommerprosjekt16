function getMapDescription(layer){
  var descUrl=currentWmsUrl;
  descUrl +="/?REQUEST=GetLegend&SERVICE=WMS&VERSION=1.1.1&LegendColor=0xDBDEDA&&SRS=EPSG:4326";
  descUrl += "&LAYERS=";
  descUrl += layer; //Eks EIENDOMSKART
  descUrl += "&BBOX=";

  var bounds=map.getBounds();
  var sw=[bounds._sw.lng, bounds._sw.lat];
  var ne=[bounds._ne.lng, bounds._ne.lat];
  descUrl += sw[0];
  descUrl = descUrl + ","+ sw[1];
  descUrl = descUrl +","+ ne[0];
  descUrl = descUrl + ","+ ne[1];
  // "475626.562478743,7461423.18790095,478165.312480941,7462562.98087076"
  descUrl += "&HEIGHT=862&WIDTH=1920&ZOOMLEVEL=15&LEGENDFONT=MS%20Reference%20Sans%20Serif&LEGENDFONTSIZE=9&LEGENDWIDTH=300";

  var tmpImg = new Image();
  tmpImg.src=descUrl; //or  document.images[i].src;
  $(tmpImg).on('load',function(){
    var orgWidth = tmpImg.width;
    var orgHeight = tmpImg.height;
    var tegnForklaring = document.getElementById("tegnForklaring");
    var imgDiv = document.getElementById("legendImgDiv");
    $(tegnForklaring).css('height', orgHeight);
    $(legendImgDiv).css('background-image', 'url(' + descUrl + ')');
    $(legendImgDiv).css('height', orgHeight);
    $(tegnForklaring).show();
  });
}
