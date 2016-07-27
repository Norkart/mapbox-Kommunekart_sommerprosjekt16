var targets =[];
var tjenesteObjects={};
var activeKommuneData=[];
var activeInfoboxes=[];
var colors = ["rgba(225, 86, 83, 1)", "rgba(134, 167, 223, 1)", "rgba(244, 172, 74, 1)", "rgba(225, 210, 71, 1)", "rgba(160, 195, 56, 1)"];
var colImages=["red.png", "blue.png", "orange.png", "yellow.png", "green.png"];

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
      createCapabilitylist(res, lat, long, kommuneId);
    }
  });
}

function createCapabilitylist(res, lat, long, kommuneId){
  createSideMenu(res, lat, long);
  tjenesteObjects={};
  getFeatureInfoForObject(targets, long, lat);
  btnEvent();
  checkEvent();
}

function createSideMenu(res,lat, long){
  //Creating a list with available Features for current kommune(queryable =true)
  var availableFeatures =[];
  var subTitles = [];
  for (var j = 0; j < res.length; j++) {
    subTitles.push(res[j].Title);
    var featuresList = [];
    for (var i = 0; i < res[j].Layers.length; i++) {
      var feature = res[j].Layers[i];
      if(feature.Queryable ==true){
        featuresList.push(feature);
      }
    }
    availableFeatures.push(featuresList);
  }
  if(availableFeatures.length ==0){
    return;
  }
  getFeatureHeaderDom();
  getList(subTitles, availableFeatures);
}

function getFeatureHeaderDom(){
  var featureHeader = document.createElement("h3"); //Creating header for Featurelist
  featureHeader.id="featureHeader";
  featureHeader.innerHTML = "Tilgjengelige tjenester";
  document.getElementById("availableFeatureInformation").appendChild(featureHeader);
}

function getList(subTitles, availableFeatures){
  var availableFeaturesList = document.createElement("ul"); //Creating list
  $(availableFeaturesList).addClass("sideBarList");
  availableFeaturesList.id="availableFeaturesList";
  document.getElementById("availableFeatureInformation").appendChild(availableFeaturesList);
  targets = [];
  insertListContent(subTitles, availableFeatures);
}

function insertListContent(subTitles, availableFeatures){
  //Putting elements into availableFeaturesList:
  for (var j = 0; j < availableFeatures.length; j++) {
    var sublist = availableFeatures[j];
    addSubTitle(subTitles[j], availableFeaturesList);
    var subTargets = [];
    for (var i = 0; i < sublist.length; i++) {
      var className = "mainElement";
      addListElement(availableFeaturesList, sublist[i].Description, className, sublist[i].Name);
      subTargets.push(sublist[i].Name);
    }
    targets.push(subTargets);
  }
}

//Get featureinfo clicked element:
function getFeatureInfoForObject(targets, long, lat){
  for (var j = 0; j < layerAreas.length; j++) {
    var currList = targets[j];
    var featureUrl= "http://www.webatlas.no/wacloudtest/servicerepository/FeatureInfoService.svc/json/GetFeatureInfo?x="+ long+"&y=" +lat+"&srs=EPSG:4326&tolerance=1&querylayers=";
    featureUrl += layerAreas[j];
    featureUrl +=":";
    var layers=currList[0];
    if(currList.length > 1){
      for(var i=1; i<currList.length; i++){
        layers+=","+currList[i];
      }
    }
    featureUrl += layers;
    doFeatureQuery(featureUrl);
  }
}

function removeCapabilitylist(){
  document.getElementById("availableFeatureInformation").innerHTML="";
}

function updateSideMenu(){
  activeInfoboxes=[];
  var elementListe = document.getElementById("availableFeaturesList");
  var listItem = elementListe.children;
  updateElementsInList(listItem);
}

function updateElementsInList(listElements){
  var colorCounter = 0;
  for (var i = 0; i < listElements.length; i++) {
    var currListElement = listElements[i]; //Current subListElement
    var currentListButton = currListElement.children[0];
    if(!hasAttribute("elementfeaturename", currentListButton)){ //If element is subtitle
      continue;
    }
    var name =currentListButton.getAttribute("elementfeatureName").toString();
    if(hasPolygon(name)){ //Check if polygon exsists in map
      removePolygon(name);
    }
    activateButton(currentListButton);
    if(tjenesteObjects[name] == undefined){ //If no FeatureInfo for listObject
      disableButton(currentListButton);
    }
    else{
      var coordinatesObj = tjenesteObjects[name].Geometry;
      var color = colors[colorCounter];
      var img = document.createElement("img");
      img.src = "../images/"+ colImages[colorCounter];
      img.className = "backgrImage";
      colorCounter++;
      if (colorCounter>colors.length){
        colorCounter = 0;
      }
      currentListButton.appendChild(img);
      hidePolygonColor(img);
      addPolygon(coordinatesObj, name, color);
      var colorLink = ""
      hidePolygon(name);
      if(exsistsInList(activeKommuneData, name)){
        addRasterPolygon(name, coordinatesObj);
        $(currentListButton.children[1]).toggleClass("checked");
        showPolygon(name);
        showPolygonColor(currentListButton.children[2]);
      }
      currListElement.setAttribute("element", tjenesteObjects[name]); //addFeatureInfo as an attribute in li dom
      if(tjenesteObjects[name].length > 1){ //if listElement contains more than one featureinfo objects
        // addCheckBox(currListElement);
        addSubList(currListElement,tjenesteObjects[name]);
      }
    }
  }

}
// function updateElementsInList(listItem){
//   var colorCounter = 0;
//   for (var i = 0; i < listItem.length; i++) {
//     var currListElement = listItem[i]; //Current subListElement
//     if(!$(currListElement).hasClass("elementfeatureName")){
//       return;
//     }
//     var currentListButton = currListElement.children[0];
//     var name =currentListButton.getAttribute("elementfeatureName").toString();
//     if(hasPolygon(name)){
//       removePolygon(name);
//     }
//     activateButton(currentListButton);
//     if(tjenesteObjects[name] == undefined){ //If no FeatureInfo for listObject
//       disableButton(currentListButton);
//     }
//     else{
//       var coordinatesObj = tjenesteObjects[name][0].Geometry;
//       var color = colors[colorCounter];
//       var img = document.createElement("img");
//       img.src = "../images/"+ colImages[colorCounter];
//       img.className = "backgrImage";
//       colorCounter++;
//       if (colorCounter>colors.length){
//         colorCounter = 0;
//       }
// // var src = document.getElementById("header");
//       currentListButton.appendChild(img);
//       hidePolygonColor(img);
//       addPolygon(coordinatesObj, name, color);
//       var colorLink = ""
//       hidePolygon(name);
//       if(exsistsInList(activeKommuneData, name)){
//         addRasterPolygon(name, coordinatesObj);
//         $(currentListButton.children[1]).toggleClass("checked");
//         showPolygon(name);
//         showPolygonColor(currentListButton.children[2]);
//       }
//       currListElement.setAttribute("element", tjenesteObjects[name]); //addFeatureInfo as an attribute in li dom
//       if(tjenesteObjects[name].length > 1){ //if listElement contains more than one featureinfo objects
//         // addCheckBox(currListElement);
//         addSubList(currListElement,tjenesteObjects[name]);
//       }
//     }
//   }
//   checkEvent();
// }
function addSubList(currListItem,tjenesteObjects){
  var newList = document.createElement("ul");
  $(newList).addClass("sideBarList");
  $(newList).addClass("subSideBarList");
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
}

function activateButton(currentBtn){
  if($(currentBtn).hasClass("udefinert")){
    $(currentBtn).removeClass("udefinert");
  }
  $(currentBtn).attr("disabled", false);
}

function addListElement(list, label, className, objectInfo){
  var listElement = document.createElement("li");
  listElement.id = label;
  list.appendChild(listElement);

  var btn = document.createElement("div"); //button
  btn.className="tool-button";
  $(btn).addClass(className);
  $(btn).addClass("featureListElement");
  // btn.setAttribute(false, "active");
  if (objectInfo != null){
    btn.setAttribute("elementFeatureName",objectInfo);
  }
  listElement.appendChild(btn);
  var spanText = document.createElement("span"); //Button text
  spanText.innerHTML= label;
  btn.appendChild(spanText);
  addCheckBox(listElement);
}

function addSubTitle(subTitle, list){
  var listElement = document.createElement("li");
  listElement.className = "subTitle";

  var txt = document.createElement("h4");
  txt.innerHTML = subTitle;
  listElement.appendChild(txt);
  list.appendChild(listElement);
}

var checkBoxCounter = 0;
function addCheckBox(currentListElement){
  var btn = currentListElement.children[0];
  var listCheckBox = document.createElement("button");//checkbox inside button
  // listCheckBox.type ="checkbox";
  listCheckBox.className ="check";
  listCheckBox.id = checkBoxCounter+"check";
  checkBoxCounter++;
  btn.appendChild(listCheckBox);
}

function doFeatureQuery(featureUrl){
  $.ajax({
    url: featureUrl,
    complete: function(res){
      var response=JSON.parse(res.responseText);
      for (var j = 0; j < targets.length; j++) {
        var currTargetList = targets[j];
        var list=[];
        for (var k = 0; k < currTargetList.length; k++) {
          var targetListElement = currTargetList[k];
          for(var i = 0; i < response.length; i++){
            if(response[i].WMSLayer===targetListElement){
              list.push(response[i]);
              tjenesteObjects[targetListElement]=response[i];
            }
          }
        }

      }
      updateSideMenu();
    }
  });
}

function showInformation(listElement) {
  var featureName = listElement.children[0].getAttribute("elementfeatureName").toString();
  var features=tjenesteObjects[featureName].AttributesList;
  var string = "";
  var infoDiv = addInfoDiv(listElement);
  var infoList = addInfoList(infoDiv);
  for (var element in features) {
    if(features.hasOwnProperty(element)){
      var currentElement = features[element];
      if(currentElement.Name =="Link"){
        addLink(currentElement.Value, infoList);
      } else {
        addFeatureInfoText(currentElement.Name, currentElement.Value, infoList);
      }
    }
  }
}

function btnEvent(){
  var classname = document.getElementsByClassName("featureListElement");
  for (var i = 0; i < classname.length; i++) {
    // className[i].
    // classname[i].addEventListener('click', myFunction, false);
    classname[i].addEventListener('click', function(){
      var listElement = event.target.parentNode.parentNode;
      var btn = event.target.parentNode;
      var elementTxt = btn.getAttribute("elementfeatureName").toString();
      // if(event.target.parentNode.parentNode.children[1]){
      if(tjenesteObjects[elementTxt].length > 1){
        // if($(event.target.parentNode.parentNode).has("ul")){
        $(event.target.parentNode.parentNode.children[1]).toggleClass("visMeny");
      }else if(exsistsInList(activeInfoboxes, elementTxt)){
        removeInfoDiv(listElement);
        removeElementInList(activeInfoboxes, elementTxt);
        event.currentTarget.setAttribute("active", false);
        $(event.currentTarget).toggleClass("activeInfoBox");
      } else{
        showInformation(listElement);
        $(event.currentTarget).toggleClass("activeInfoBox");
        activeInfoboxes.push(elementTxt);
        event.currentTarget.setAttribute("active", true);
      }
    });

  }
}

function checkEvent(){
  var classname = document.getElementsByClassName("check");
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', function(){
      var checkName = event.target.parentNode.getAttribute("elementfeatureName").toString();
      var coordinatesObj = tjenesteObjects[checkName].Geometry;
      var imageElement = event.target.parentNode.children[2];
      if(!$(event.target).hasClass("checked")){
        activeKommuneData.push(checkName);
        showPolygonColor(imageElement);
        showPolygon(checkName);
      } else{
        removeElementInList(activeKommuneData, checkName);
        hidePolygonColor(imageElement);
        hidePolygon(checkName);
      }
      $(event.target).toggleClass("checked");
      event.stopPropagation();
    });
  }
}

function exsistsInList(list, element){
  for (var i = 0; i < list.length; i++) {
    if(list[i]==element){
      return(true);
    }
  }
  return(false);
}

function removeElementInList(list, target){
  var index = list.indexOf(target);
  list.splice(index, 1);
}

function addInfoDiv(listElement){
  var infoBox = document.createElement("div");
  infoBox.className = "gfiInfo";
  listElement.appendChild(infoBox);
  return infoBox;
}

function removeInfoDiv(listElement){
  listElement.removeChild(listElement.childNodes[1]);
}

function addInfoList(infoDiv){
  var infoList = document.createElement("ul");
  infoList.className = "gfiInfoList";
  infoDiv.appendChild(infoList);
  return infoList;
}

function addFeatureInfoText(name, value, infoList){
  var liElement = document.createElement("li");
  liElement.className = "gfiInfoListElement";
  infoList.appendChild(liElement);

  var liText = document.createElement("div");
  liText.className = "gfiInfoText";
  liElement.appendChild(liText);

  var descr = document.createElement("span");
  descr.className = name;
  descr.innerHTML = name + ": ";
  liText.appendChild(descr);

  var valueTxt = document.createElement("span");
  valueTxt.className = value;
  valueTxt.innerHTML = value;
  liText.appendChild(valueTxt);
}

function addLink(link, parent){
  var a = document.createElement("a");
  a.className ="link";
  a.innerHTML ="Link";
  a.href = link;
  a.target = "_blank";

  // parent.appendChild(a);
  var liElement = document.createElement("li");
  liElement.appendChild(a);
  parent.appendChild(liElement);
}

function addPolygon(coordinatesObj, id, color){
  var polygon = makeGeojsonFeature(coordinatesObj);
  var sourceObj2=getSourceObj2(polygon);
  map.addSource(id,sourceObj2);
  var layerObj2=paintPolygon(id, color);
  map.addLayer(layerObj2, color);
}

function removePolygon(id){
  map.removeLayer(id);
  map.removeSource(id);
}

function hidePolygon(id){
  map.setLayoutProperty(id, 'visibility', 'none');
}

function showPolygon(id){
  map.setLayoutProperty(id, 'visibility', 'visible');
}

function hidePolygonColor(imageObj){
  $(imageObj).hide();
}
function showPolygonColor(imageObj){
  var img = imageObj ;
  $(img).show();
}
function hasPolygon(id){
  if(map.getLayer(id)!=undefined){
    return true;
  } else {
    return false;
  }
}

function getSourceObj2(geojson){
  var sourceObj= {
    "type": "geojson",
    "data": geojson
  };
  return sourceObj;
}
function paintPolygon(name, color){
  var lObj= {
    "id": name,
    "type": "line",
    "source": name,
    "source-layer": name,
    "paint": {
      "line-color": color,
      "line-width": 3
    }
  };
  return lObj;
}

function addColorBobble(parent, color){
  var colCircle = document.createElement("div");
  colCircle.className = "colorImage";
  colCircle.style.backgroundColor = color;
  parent.appendChild(colCircle);
}

$("a.link").on("click",function(){
  window.open('www.yourdomain.com','_blank');
});

function hasAttribute(attribute, dom){
  var attr = $(dom).attr(attribute);

  if (typeof attr !== typeof undefined && attr !== false){
    return true;
  } else{
    return false;
  }
}
