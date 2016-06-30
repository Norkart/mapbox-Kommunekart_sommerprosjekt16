function getHeightAboveSeaLevel(lat,long){
  var heightUrl= "https://kommunekart.com/api/WebPublisher/GetPointValues?apiRoute=api%2FWebPublisher%2FGetPointValues&lat="+lat+"&lng=" +long+"&appId=Kommunekart";
  $.ajax({
    url: heightUrl,
    complete: function(res){
      var response = res.responseText;
      console.log(response);
    }
  });
}
