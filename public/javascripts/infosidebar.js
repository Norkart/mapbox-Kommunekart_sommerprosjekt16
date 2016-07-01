//Transform WGS to UTM coordinates
function getUTMCoordinates(latitude, longitude, callback){
  var adressUrl= "https://kommunekart.com/api/Transform/TransformationRequest?apiRoute=api%2FTransform%2FTransformationRequest&north="+latitude+"&east="+longitude+"&fromEpsg=EPSG%3A4326&toEpsg=EPSG%3A32632&appId=Kommunekart";
  $.ajax({
    url: adressUrl,
    complete: callback
  });
}

//Get height above sea level
function getHeightAboveSeaLevel(latitude, longitude, callback){
  var adressUrl= "https://kommunekart.com/api/WebPublisher/GetPointValues?apiRoute=api%2FWebPublisher%2FGetPointValues&lat="+latitude+"&lng="+longitude+"&appId=Kommunekart";
  $.ajax({
    url: adressUrl,
    complete: callback
  });
}

function getFeaturesForSideMenu(kommuneId, lat, long){
  document.getElementById("availableFeatureInformation").innerHTML!="";
  var layersUrl="https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetCapabilities?applicationID=Web-VectortilesDemo-"+kommuneId;
  $.ajax({
    url:layersUrl
  }).done(function(res){
    if(document.getElementById("availableFeatureInformation").innerHTML!=""){
      removeCapabilitylist();
    }
    if(res.length ==0){
      return;
    } else{
      createCapabilitylist(res, lat, long);
    }
  });
}

function createCapabilitylist(res, lat, long){
  //Creating a list with available Features for current kommune(queryable =true)
  var availableFeatures =[];
  for (var i = 0; i < res[0].Layers.length; i++) {
    var feature = res[0].Layers[i];
    if(feature.Queryable ==true){
      availableFeatures.push(feature);
    }
  }
  if(availableFeatures.length ==0){
    return;
  }
  var featureHeader = document.createElement("h3"); //Creating header for Featurelist
  featureHeader.id="featureHeader";
  featureHeader.innerHTML = "Tilgjengelige tjenester";
  document.getElementById("availableFeatureInformation").appendChild(featureHeader);

  var availableFeaturesList = document.createElement("ul"); //Creating list
  availableFeaturesList.id="availableFeaturesList";
  document.getElementById("availableFeatureInformation").appendChild(availableFeaturesList);

  //Putting elements into availableFeaturesList:
  for (var i = 0; i < availableFeatures.length; i++) {
    var listElement = document.createElement("li");
    availableFeaturesList.appendChild(listElement);

    var featureElement = document.createElement("button"); //button
    featureElement.className="tool-button";
    $(featureElement).addClass("featureListElement");
    featureElement.setAttribute("elementFeatureName",availableFeatures[i].Name);

    var listCheckBox = document.createElement("input");//checkbox inside button
    listCheckBox.type ="checkbox";
    listCheckBox.className ="check";

    var checkboxSpan =document.createElement("span");//span inside checkbox for css
    listCheckBox.appendChild(checkboxSpan);
    featureElement.appendChild(listCheckBox);

    var featureText = document.createElement("span"); //Button text
    featureText.innerHTML= availableFeatures[i].Description;
    featureElement.appendChild(featureText);

    listElement.appendChild(featureElement); //Adding button to listelement
  }

  //Get featureinfo clicked element:
  $(".featureListElement").click(function(){
    var featureUrl= "http://www.webatlas.no/wacloudtest/servicerepository/FeatureInfoService.svc/json/GetFeatureInfo?x="+ long+"&y=" +lat+"&srs=EPSG:4326&tolerance=1&querylayers=";
    featureUrl += layerArea;
    featureUrl +=":";
    layers =event.currentTarget.getAttribute("elementfeaturename");
    featureUrl += layers;
    console.log(featureUrl);
    $.ajax({
      url: featureUrl,
      complete: function(res){
        console.log(res);
      }
    });
  });
}

function removeCapabilitylist(){
  document.getElementById("availableFeatureInformation").innerHTML="";
  // console.log("fjern liste");
}
