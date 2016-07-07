var targets =[];
var tjenesteObjects={};

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
  // var adressUrl= "https://kommunekart.com/api/WebPublisher/GetPointValues?apiRoute=api%2FWebPublisher%2FGetPointValues&lat="+latitude+"&east="+longitude+"&appId=Kommunekart";
  $.ajax({
    url: adressUrl,
    complete: callback
  });
}

function getCapabilitiesForSideMenu(kommuneId, lat, long){
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
      console.log(res);
      createCapabilitylist(res, lat, long, kommuneId);
    }
  });
}

function createCapabilitylist(res, lat, long, kommuneId){
  createSideMenu(res, lat, long);
  getFeatureInfoForObject(targets, long, lat);
}

function createSideMenu(res,lat, long){
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

  getFeatureHeaderDom();
  getList(availableFeatures);
}

function getFeatureHeaderDom(){
  var featureHeader = document.createElement("h3"); //Creating header for Featurelist
  featureHeader.id="featureHeader";
  featureHeader.innerHTML = "Tilgjengelige tjenester";
  document.getElementById("availableFeatureInformation").appendChild(featureHeader);
}

function getList(availableFeatures){
  var availableFeaturesList = document.createElement("ul"); //Creating list
  $(availableFeaturesList).addClass("sideBarList");
  availableFeaturesList.id="availableFeaturesList";
  document.getElementById("availableFeatureInformation").appendChild(availableFeaturesList);

  insertListContent(availableFeatures);
}

function insertListContent(availableFeatures){
  //Putting elements into availableFeaturesList:
  for (var i = 0; i < availableFeatures.length; i++) {
    var className = "featureListElement";
    addListElement(availableFeaturesList, availableFeatures[i].Description, className, availableFeatures[i].Name);
    // var listElement = document.createElement("li");
    // availableFeaturesList.appendChild(listElement);
    //
    // var featureElement = document.createElement("button"); //button
    // featureElement.className="tool-button";
    // $(featureElement).addClass("featureListElement");
    // featureElement.setAttribute("elementFeatureName",availableFeatures[i].Name);
    //
    // var featureText = document.createElement("span"); //Button text
    // featureText.innerHTML= availableFeatures[i].Description;
    // featureElement.appendChild(featureText);
    //
    // listElement.appendChild(featureElement); //Adding button to listelement
    targets.push(availableFeatures[i].Name);
  }
}

//Get featureinfo clicked element:
function getFeatureInfoForObject(targets, long, lat){
  var featureUrl= "http://www.webatlas.no/wacloudtest/servicerepository/FeatureInfoService.svc/json/GetFeatureInfo?x="+ long+"&y=" +lat+"&srs=EPSG:4326&tolerance=1&querylayers=";
  featureUrl += layerArea;
  console.log(layerArea);
  featureUrl +=":";
  var layers=targets[0];
  if(targets.length > 1){
    for(var i=1; i<targets.length; i++){
      layers+=","+targets[i];
    }
  }
  featureUrl += layers;
  console.log("URL: "+featureUrl);
  doFeatureQuery(featureUrl);
}

function removeCapabilitylist(){
  document.getElementById("availableFeatureInformation").innerHTML="";
}

function updateSideMenu(){
  var elementListe = document.getElementById("availableFeaturesList");
  var listItem = elementListe.children;
  updateElementsInList(listItem);
  btnEvent();
}

function updateElementsInList(listItem){
  for (var i = 0; i < listItem.length; i++) {
    var currListElement = listItem[i]; //Current subListElement
    var currentListButton = currListElement.children[0];
    var name =currentListButton.getAttribute("elementfeatureName").toString();
    // if($(currListElement).hasClass("udefinert")){ //If listElement is deactivated
    //   activateButton(currListElement);
    // }
    console.log(name);
    console.log(tjenesteObjects[name]);
    if(tjenesteObjects[name] == undefined){ //If no FeatureInfo for listObject
      console.log(name + " Er udefinert");
      disableButton(currentListButton);
    }
    else{
      currListElement.setAttribute("element", tjenesteObjects[name]); //addFeatureInfo as an attribute in li dom
      if(tjenesteObjects[name].length > 1){ //if listElement contains more than one featureinfo objects
        // addCheckBox(currListElement);
        addSubList(currListElement,tjenesteObjects[name]);
      }
      else{
        console.log("ikke definert geometri");
      }
    }
  }

}


function addSubList(currListItem,tjenesteObjects){
  var newList = document.createElement("ul");
  $(newList).addClass("sideBarList");
  currListItem.appendChild(newList);
  addSublistElements(tjenesteObjects, newList);
}

function addSublistElements(tjenesteObjects, newList){
  for (var k = 0; k < tjenesteObjects.length; k++) {
    if(document.getElementById(tjenesteObjects[k].FeatureType)!=null){
      break;
    }
    var className = "subFeatureListElement";
    addListElement(newList, tjenesteObjects[k].FeatureType, className, null);
  }
}

function disableButton(currentBtn){
  $(currentBtn).addClass("udefinert");
  $(currentBtn).attr("disabled", true);
  deleteCheckbox(currentBtn);

}

function activateButton(listItem){
  $(listItem[i].children[0]).removeClass("udefinert");
  $(listItem[i].children[0].children[0]).attr("disabled", false);
}

function addListElement(list, label, className, objectInfo){
  var listElement = document.createElement("li");
  listElement.id = label;
  list.appendChild(listElement);

  var btn = document.createElement("button"); //button
  btn.className="tool-button";
  $(btn).addClass(className);
  if (objectInfo != null){
    btn.setAttribute("elementFeatureName",objectInfo);
  }
  listElement.appendChild(btn);

  var spanText = document.createElement("span"); //Button text
  spanText.innerHTML= label;
  btn.appendChild(spanText);
  addCheckBox(listElement);
}

function addCheckBox(currentListElement){
  var btn = currentListElement.children[0];
  var span = currentListElement.children[0].children[0];
  var listCheckBox = document.createElement("input");//checkbox inside button
  listCheckBox.type ="checkbox";
  listCheckBox.className ="check";
  btn.insertBefore(listCheckBox, span);
}

function deleteCheckbox(btn){
  btn.remove('.check');
}

function doFeatureQuery(featureUrl){
  $.ajax({
    url: featureUrl,
    complete: function(res){
      var response=JSON.parse(res.responseText);
      for (var j = 0; j < targets.length; j++) {
        var list=[];
        for(var i = 0; i < response.length; i++){
          if(response[i].WMSLayer===targets[j]){
            list.push(response[i]);
          }
        }
        if(list.length>0){
          tjenesteObjects[targets[j]]=list;
        }
      }
      console.log(tjenesteObjects);
      updateSideMenu();
    }
  });
}

// $(".featureListElement").click(function(){
//   alert("Knappen er klikket");
// });
var myFunction = function() {
    alert("Knappen er klikket");
}

function btnEvent(){
  var classname = document.getElementsByClassName("featureListElement");
  for (var i = 0; i < classname.length; i++) {
      // className[i].
      classname[i].addEventListener('click', myFunction, false);
  }
}
// getUTMCoordinates(e.lngLat.lat,e.lngLat.lng,
//   function(result){
//     var result = result;
//     console.log(result);
//   }
// );
