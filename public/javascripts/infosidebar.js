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
      // console.log(res);
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

  targets = [];
  insertListContent(availableFeatures);
}

function insertListContent(availableFeatures){
  //Putting elements into availableFeaturesList:
  for (var i = 0; i < availableFeatures.length; i++) {
    var className = "mainElement";
    addListElement(availableFeaturesList, availableFeatures[i].Description, className, availableFeatures[i].Name);
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
  activeInfoboxes=[];
  var elementListe = document.getElementById("availableFeaturesList");
  var listItem = elementListe.children;
  updateElementsInList(listItem);
  btnEvent();
}

function updateElementsInList(listItem){
  var colorCounter = 0;
  for (var i = 0; i < listItem.length; i++) {
    var currListElement = listItem[i]; //Current subListElement
    var currentListButton = currListElement.children[0];
    var name =currentListButton.getAttribute("elementfeatureName").toString();
    if(hasPolygon(name)){
      removePolygon(name);
    }

    console.log(name);
    // console.log(tjenesteObjects[name]);
    if(tjenesteObjects[name] == undefined){ //If no FeatureInfo for listObject
      console.log(name + " Er udefinert");
      disableButton(currentListButton);
    }
    else{
      var coordinatesObj = tjenesteObjects[name][0].Geometry;
      var color = colors[colorCounter];
      console.log(color);
      var img = document.createElement("img");
      img.src = "../images/"+ colImages[colorCounter];
      img.className = "backgrImage";
      colorCounter++;
      if (colorCounter>colors.length){
        colorCounter = 0;
      }
// var src = document.getElementById("header");
      currentListButton.appendChild(img);
      hidePolygonColor(img);
      addPolygon(coordinatesObj, name, color);
      var colorLink = ""
      hidePolygon(name);
      console.log("Hit kommer man");
      if(exsistsInList(activeKommuneData, name)){
        console.log("Dette burde jo funke");
        addRasterPolygon(name, coordinatesObj);
        console.log(currentListButton.children[1]);
        $(currentListButton.children[1]).toggleClass("checked");
        showPolygon(name);
      }
      currListElement.setAttribute("element", tjenesteObjects[name]); //addFeatureInfo as an attribute in li dom
      console.log(tjenesteObjects[name].length);
      if(tjenesteObjects[name].length > 1){ //if listElement contains more than one featureinfo objects
        // addCheckBox(currListElement);
        addSubList(currListElement,tjenesteObjects[name]);
      }
    }
  }
  checkEvent();
}

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

function activateButton(listItem){
  $(listItem[i].children[0]).removeClass("udefinert");
  $(listItem[i].children[0].children[0]).attr("disabled", false);
}

function addListElement(list, label, className, objectInfo){
  var listElement = document.createElement("li");
  listElement.id = label;
  list.appendChild(listElement);

  var btn = document.createElement("div"); //button
  btn.className="tool-button";
  $(btn).addClass(className);
  $(btn).addClass("featureListElement");
  if (objectInfo != null){
    btn.setAttribute("elementFeatureName",objectInfo);
  }
  listElement.appendChild(btn);

  var spanText = document.createElement("span"); //Button text
  spanText.innerHTML= label;
  btn.appendChild(spanText);
  addCheckBox(listElement);
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
console.log("starting query");
  $.ajax({
    url: featureUrl,
    complete: function(res){
      console.log("query finish");
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
      // console.log(tjenesteObjects);
      updateSideMenu();
    }
  });
}

function showInformation(listElement) {
  var featureName = listElement.children[0].getAttribute("elementfeatureName").toString();
  var features=tjenesteObjects[featureName][0].AttributesList;
  var string = "";
  var infoDiv = addInfoDiv(listElement);
  var infoList = addInfoList(infoDiv);
  console.log(infoList);
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
          console.log("Viser meny");
        }else if(exsistsInList(activeInfoboxes, elementTxt)){
          removeInfoDiv(listElement);
          removeElementInList(activeInfoboxes, elementTxt);
          console.log("Lukker info");
        } else{
          showInformation(listElement);
          activeInfoboxes.push(elementTxt);
          console.log("åpner info");
        }
      });

  }
}

function checkEvent(){
  var classname = document.getElementsByClassName("check");
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', function(){
      var checkName = event.target.parentNode.getAttribute("elementfeatureName").toString();
      var coordinatesObj = tjenesteObjects[checkName][0].Geometry;
      console.log(coordinatesObj);
      var imageElement = event.target.parentNode.children[2];
      if(!$(event.target).hasClass("checked")){
        activeKommuneData.push(checkName);
        showPolygonColor(imageElement);
        console.log("Layer heter: "+checkName);
        showPolygon(checkName);
        console.log(makeGeojsonFeature(coordinatesObj));
      } else{
        removeElementInList(activeKommuneData, checkName);
        hidePolygonColor(imageElement);
        hidePolygon(checkName);
      }
      $(event.target).toggleClass("checked");
      console.log("Checkboxen er: "+event.target);
      event.stopPropagation();
      console.log(activeKommuneData);
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
  parent.appendChild(a);
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
  console.log(parent);
  var img = imageObj ;
  console.log(img);
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
  console.log("Laget heter: " + name);
  console.log("COLORRRRR");
  // alert("skal kjøre color");
  console.log(color);
  console.log(typeof(color));
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
