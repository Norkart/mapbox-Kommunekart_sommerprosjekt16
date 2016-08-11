var GFI={
  targets:[],
  drawnKommuneData:[],
  activeCheckbuttons:{}, //keys is layerName and value is obj{type, active}
  activeInfoboxes:{},
  active_POI_data:{},//availbale data for current clicked point
  layerAreas:[],
  colors:[
    "rgba(225, 86, 83, 1)", "rgba(53, 150, 221, 1)", "rgba(244, 167, 51, 1)", "rgba(213, 76, 174, 1)", "rgba(160, 195, 56, 1)"
  ]
};
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
    if(res.length ==0){ //no results -> do nothing
      return;
    }else{
      createCapabilitylist(res, lat, long, kommuneId);
      // openActiveInfoBoxes();
    }
  });
}

function createCapabilitylist(res, lat, long, kommuneId){ //is running for each map click
  createSideMenu(res, lat, long);
  tjenesteObjects={};
  getFeatureInfoForObject(long, lat); //kaller videre til der hvor det legges inn i tjenesteObjects
}


//Get featureinfo clicked element:
function getFeatureInfoForObject(long, lat){
  var functionsToQuery=[];
  for (var j = 0; j < GFI.layerAreas.length; j++) {
    var currList = GFI.targets[j];
    var featureUrl= "http://www.webatlas.no/wacloudtest/servicerepository/FeatureInfoService.svc/json/GetFeatureInfo?x="+ long+"&y=" +lat+"&srs=EPSG:4326&tolerance=1&querylayers=";
    featureUrl += GFI.layerAreas[j];
    featureUrl +=":";
    var layers=currList[0];
    if(currList.length > 1){
      for(var i=1; i<currList.length; i++){
        layers+=","+currList[i];
      }
    }
    featureUrl += layers;
    functionsToQuery.push(wrapperGenerator(featureUrl));
  }
  common.handleMultipleAsyncCalls(functionsToQuery, function(){
    console.log("ALL GOOOD");
    console.log(tjenesteObjects);
    console.log(GFI.activeCheckbuttons);
    if($.isEmptyObject(tjenesteObjects)){
      // alert("Ingen tilgjenelige tjenester")
      console.log("Ingen Tilgjengelige tjenester");
      document.getElementById("featureHeader").innerHTML="Ingen tilgjengelige tjenester for dette punktet";
    }else{
      document.getElementById("featureHeader").innerHTML="Tilgjengelige tjenester";
      updateSideMenu();
      initCapabilityBtn();
      openActiveInfoBoxes();

      if(menuState.infoSidebarStatus){
        turnOnActiveCheckboxes();
      }
      // checkboxCapabilityEvent();
    }
  }, function(){
    console.log("FAIL");
  });
}
function wrapperGenerator(featureUrl){
  return function(success, failure){
    $.ajax({
      url: featureUrl,
      complete: function(res){
        var response=JSON.parse(res.responseText);
        for (var j = 0; j < GFI.targets.length; j++) {
          var currTargetList = GFI.targets[j];
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
        success();
      }
    });
  }
}

function turnOnActiveCheckboxes(){
  for(var layerName in GFI.active_POI_data){
    if(GFI.activeCheckbuttons[layerName]!==undefined){

      console.log(GFI.activeCheckbuttons);
      if(GFI.activeCheckbuttons[layerName]["feature"]!== undefined){
        if(GFI.activeCheckbuttons[layerName]["feature"]["active"]===true){
          console.log("UpdateFeature");
          var coordinatesObj = tjenesteObjects[layerName].Geometry;
          updateFeatureRasterPolygon(layerName, coordinatesObj);
        }
      }
      console.log("CHECKING FOR BORDER");
      console.log(GFI.activeCheckbuttons[layerName]["border"]);
      if(GFI.activeCheckbuttons[layerName]["border"]!==undefined){
        if(GFI.activeCheckbuttons[layerName]["border"]["active"]===false){
          //turn off border - done automatically
        }else{
          //turn checkbox on
          var checkEl=getCheckboxEl(layerName, "border");
          toggleSpecificGFICheckbox(checkEl, true);
        }
      }if(GFI.activeCheckbuttons[layerName]["lag"]!== undefined){
        if(GFI.activeCheckbuttons[layerName]["lag"]["active"]===true){
        //do anything?
        var checkEl=getCheckboxEl(layerName, "lag");
        console.log(checkEl);
        toggleSpecificGFICheckbox(checkEl);
        }
      }
    }
  }
}

function createSideMenu(res,lat, long){
  //Creating a list with available Features for current kommune(queryable =true)
  GFI.availableFeatures =[];
  var pastLayerAreas = GFI.layerAreas;
  GFI.layerAreas = [];
  var subTitles = [];
  for (var j = 0; j < res.length; j++) {
    GFI.layerAreas.push(res[j].Name);
    subTitles.push(res[j].Title);
    var featuresList = [];
    for (var i = 0; i < res[j].Layers.length; i++) {
      var feature = res[j].Layers[i];
      if(feature.Queryable ==true){
        featuresList.push(feature);
      }
    }
    GFI.availableFeatures.push(featuresList);
  }
  if(pastLayerAreas != undefined){
    if(!arraysEqual(pastLayerAreas,GFI.layerAreas)){
      while (activePolygons.length > 0) {
        removePolygon(activePolygons[0]);
      }
    }
  }
  if(GFI.availableFeatures.length ==0){
    return;
  }
  getFeatureHeaderDom();
  getList(subTitles, GFI.availableFeatures);
}

function add_POI_Info(e){
  updateAdress(e.lngLat.lng,e.lngLat.lat, function(result){
    addAdressWindow(result, e);
  });

  var latLngString="WGS 84: "+(e.lngLat.lat.toFixed(5))+"°N,  "+(e.lngLat.lng.toFixed(5))+"°Ø";
  $("#WGSKoordinater").text(latLngString);

  getHeightAboveSeaLevel(e.lngLat.lat,e.lngLat.lng,
    function(result){
      var result = JSON.parse(result.responseText).valuelist[0].v;
      $("#heightAboveSea").text(result.toFixed(0)+ " m.o.h");
    }
  );
}

function addAdressWindow(result, e){
  var result = JSON.parse(result.responseText).ReverseGeocodeResult;
  document.getElementById("adresse").innerHTML="";
  result.MunicipalityInfo.Name;
  if(result.NearestAddress==null){
    var kommuneNavn = document.createElement("h3");
    kommuneNavn.id="kommuneNavn";
    kommuneNavn.innerHTML = result.MunicipalityInfo.Name + " kommune";
    document.getElementById("adresse").appendChild(kommuneNavn);
  }else{
    var punktAdresse = document.createElement("li");
    punktAdresse.id="punktAdresse";
    punktAdresse.innerHTML = result.NearestAddress.House;
    var postnr = document.createElement("li");
    postnr.id="punktPostnr";
    postnr.innerHTML = result.NearestAddress.Zip + " "+ result.NearestAddress.PostalPlace;
    // var distance = document.createElement("li");
    // distance.id="distance";
    document.getElementById("gfi-distance").innerHTML = "Avstand til adresse: "+result.NearestAddress.Distance.toFixed(0)+" m";
    // kommuneElement.id=i+"element";
    var kommuneDiv=document.createElement("div");
    document.getElementById("adresse").appendChild(punktAdresse);
    document.getElementById("adresse").appendChild(postnr);
    // document.getElementById("otherInfo").appendChild(distance);
  }
  getCapabilitiesForSideMenu(result.MunicipalityInfo.Number, e.lngLat.lat, e.lngLat.lng);
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
  GFI.targets = [];
  insertListContent(subTitles, availableFeatures);
}

function insertListContent(subTitles, availableFeatures){
  //Putting elements into availableFeaturesList:
  for (var j = 0; j < availableFeatures.length; j++) {
    var sublist = availableFeatures[j];
    // addSubTitle(subTitles[j], availableFeaturesList);
    var subTargets = [];
    for (var i = 0; i < sublist.length; i++) {
      var className = "mainElement";
      addListElement(availableFeaturesList, sublist[i].Description, className, sublist[i].Name);
      subTargets.push(sublist[i].Name);
    }
    GFI.targets.push(subTargets);
  }
}

function removeCapabilitylist(){
  document.getElementById("availableFeatureInformation").innerHTML="";
}

function updateSideMenu(){
  var elementListe = document.getElementById("availableFeaturesList");
  var listItem = elementListe.children;
  // $(listItem).hide();
  updateElementsInList(listItem);
}

function updateElementsInList(listElements){
  var colorCounter = 0;
  for (var i = 0; i < listElements.length; i++) {
    var currListElement = listElements[i]; //Current subListElement
    var currentListButton = currListElement.children[0];
    if(!hasAttribute("elementfeaturename", currentListButton)){ //If element is subtitle
      continue; //skip to next element
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
      // GFI.active_POI_data.push(name);
      GFI.active_POI_data[name]=tjenesteObjects;
      colorCounter=prepareCapabilityDrawing(currentListButton, name, colorCounter);
      currListElement.setAttribute("element", tjenesteObjects[name]); //addFeatureInfo as an attribute in li dom
      if(tjenesteObjects[name].length > 1){ //if listElement contains more than one featureinfo objects
        // addCheckBox(currListElement);
        addSubList(currListElement,tjenesteObjects[name]);
      }
    }
  }
}

// function activateCheckboxes(){
//   for (var i = 0; i < GFI.drawnKommuneData.length; i++) {
//     GFI.drawnKommuneData[i]
//   }
// }

function prepareCapabilityDrawing(currentListButton, name, colorCounter){
  var coordinatesObj = tjenesteObjects[name].Geometry;
  var color = GFI.colors[colorCounter];
  colorCounter++;
  if (colorCounter>GFI.colors.length){
    colorCounter = 0;
  }
  var before = currentListButton.children[1];
  if(currentListButton.children.length<=2){
    addColorBobble(currentListButton, color, before);
  }
  addPolygon(coordinatesObj, name, color);
  var colorLink = "";
  hidePolygon(name);
  while (activeFeaturePolygons.length > 0) {
    removeFeatureRasterPolygon(activeFeaturePolygons[0]);
  }
  if(exsistsInList(GFI.drawnKommuneData, name)){ //TODO: her er sjekk på hva som skal være default på!!!!
    // $(currentListButton.children[2]).toggleClass("checked");
    showPolygon(name);
    showPolygonColor(currentListButton.children[1]);
    // if(exsistsInObject(GFI.activeInfoboxes, name)){
    //   addRasterPolygon(name, coordinatesObj);
    // }
    console.log(GFI.activeCheckbuttons);
    if(GFI.activeCheckbuttons[name].feature!==undefined){
      if(GFI.activeCheckbuttons[name].feature.active===true){
        // addRasterPolygon(name, coordinatesObj);
      }
    }
  }
  // if(exsistsInList(GFI.drawnKommuneData, name)&& ){
  //   $(currentListButton.children[2]).toggleClass("checked");
  //   showPolygon(name);
  //   showPolygonColor(currentListButton.children[1]);
  // }
  return colorCounter;
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
  $(currentBtn).hide();
}

function activateButton(currentBtn){
  if($(currentBtn).hasClass("udefinert")){
    $(currentBtn).removeClass("udefinert");
  }
  $(currentBtn).attr("disabled", false);
  $(currentBtn).show();
  $(currentBtn.parentNode).show();
}

function addListElement(list, label, className, objectInfo){
  var listElement = document.createElement("li");
  listElement.id = objectInfo+"-GFI";
  list.appendChild(listElement);
  $(listElement).hide();

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
  var pointer = document.createElement("div");
  pointer.className = "featurePointer";
  $(pointer).addClass("pointer-right");
  btn.appendChild(pointer);
}

getCapabilityCheckbox =function(className, name, feature){
  var check=document.createElement("input");
  var checkEl=document.createElement("div");
  var text=document.createElement("span");
  check.class=className;
  text.innerHTML=name;
  check.type="checkbox";
  check.addEventListener("click",function(event){
    GFIcheckboxClickEvent(className, event.currentTarget.parentNode.parentNode.parentNode, event.currentTarget);
  });
  check.class="gfiCheckbox";
  checkEl.appendChild(check);
  checkEl.appendChild(text);
  return checkEl;
}
getCapabilityCheckboxes=function(feature){
  var lagCheck=getCapabilityCheckbox("lagCheckbox", "Vis alt");
  if(exsistsInList(raster.activeLayerNames, feature)){
    // lagCheck.children[0].checked=true;
  }else{
    // lagCheck.children[0].checked=false;
  }
  var featureCheck=getCapabilityCheckbox("featureCheckbox", "Vis valgt");
    // featureCheck.children[0].checked=true;
  var borderCheck=getCapabilityCheckbox("borderCheckbox", "Vis omriss");
    // borderCheck.children[0].checked=true;
  var div=document.createElement("div");
  div.id=feature+"-gfiCheckboxDiv";
  div.className="gfiCheckboxDiv";
  div.appendChild(borderCheck);
  div.appendChild(featureCheck);
  div.appendChild(lagCheck);
  return div;
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

function showInformation(listElement) {
  var featureName = listElement.children[0].getAttribute("elementfeatureName").toString();
  var features=GFI.active_POI_data[featureName][featureName].AttributesList;
  var string = "";
  var infoDiv = addInfoDiv(listElement);
  var infoList = addInfoList(infoDiv, featureName);
  for (var element in features) {
    if(features.hasOwnProperty(element)){
      var currentElement = features[element];
      if(currentElement.Name =="Link"){
        addLink(currentElement.Value, infoList, currentElement.Description);
      } else {
        addFeatureInfoText(currentElement.Name, currentElement.Value, infoList, featureName);
      }
    }
  }
}

function initCapabilityBtn(){
  var classname = document.getElementsByClassName("featureListElement");
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', function(){
      toggleInfoBox(event.target, false);
      //turn on borders default
      var id=event.target.parentNode.parentNode.id;
      console.log(document.getElementById(id+"info"));
      console.log(document.getElementById(id+"info").children[0]);
      console.log(document.getElementById(id+"info").children[0].children[0]);
      var target=document.getElementById(id+"info").children[0].children[0].children[0];
      GFIBorderCheckboxEvent(target);

    });
  }
}

function initBorderCheckObj(layerName){
  if(GFI.activeCheckbuttons[layerName]!==undefined){
    if(GFI.activeCheckbuttons[layerName]["border"]===undefined){
      updateActiveCheckboxObj(layerName, "border", true);
    }
  }
};

function toggleInfoBox(domElement, doOpen){
  var listElement = domElement.parentNode.parentNode;
  var btn = domElement.parentNode;
  var elementTxt = btn.getAttribute("elementfeatureName").toString();

  initBorderCheckObj(elementTxt);

  if(tjenesteObjects[elementTxt]===undefined){
    console.log("NOOOOOOOOOOOOOOOOO");
  }
  if(tjenesteObjects[elementTxt].length > 1){
    $(domElement.parentNode.parentNode.children[1]).toggleClass("visMeny");
  }else if(exsistsInObject(GFI.activeInfoboxes, elementTxt) && !doOpen){
    closeCapabilityInfo(listElement, elementTxt, btn);
    //remove from activeInfoBoxes
    delete GFI.activeInfoboxes[elementTxt];
  }else{
    GFI.activeInfoboxes[elementTxt]={ //add to active
      name:elementTxt,
      listEl:listElement,
      btn: btn
    };
    openCapabilityInfo(GFI.activeInfoboxes[elementTxt], elementTxt);
  }
}

function closeCapabilityInfo(listElement, elementTxt, btn){
  if(exsistsInList(activeFeaturePolygons, elementTxt)){
    hidePolygon(elementTxt+"Raster");
  }
  removeInfoDiv(listElement);
  removeElementInObj(GFI.activeInfoboxes, elementTxt);
  event.currentTarget.setAttribute("active", false);
  $(event.currentTarget).children(0).removeClass("activeInfoBox");
  $(btn.children[3]).addClass("pointer-right");
  $(btn.children[3]).removeClass("pointer-down");
}

function openActiveInfoBoxes(){
  if(Object.keys(GFI.activeInfoboxes).length<1){
    return;
  }
  // console.log(GFI.active_POI_data);
  console.log("open active info boxes");
  var domElement;
  for(var el in GFI.activeInfoboxes){
    if(exsistsInObject(GFI.active_POI_data, el)){
      var features=document.getElementById("availableFeaturesList");
      var open=false
      for(var j=0; j<features.children.length; j++){
        if(features.children[j].firstChild.getAttribute("elementfeatureName") ===el){
          domElement=features.children[j].firstChild.firstChild;
          open=true;
        }
      }
      toggleInfoBox(domElement, open)
      // openCapabilityInfo(GFI.activeInfoboxes[el]);
    }
  }
}

function openCapabilityInfo(infoObj, elementTxt){
  // console.log("Open cap. info");
  showInformation(infoObj.listEl);
  $("#"+infoObj.name).children(0).children(0).toggleClass("activeInfoBox");
  $("#"+infoObj.name).children(0).attr("active", true);
  $(infoObj.btn.children[3]).addClass("pointer-down");
  $(infoObj.btn.children[3]).removeClass("pointer-right");
  var coordinatesObj = tjenesteObjects[elementTxt].Geometry;
  // if(exsistsInList(activeFeaturePolygons, elementTxt)&& exsistsInList(GFI.drawnKommuneData, elementTxt)){
  //   showPolygon(elementTxt+"Raster");
  // } else if(exsistsInList(GFI.drawnKommuneData, elementTxt)&&!exsistsInList(activeFeaturePolygons, elementTxt)){
  //   addRasterPolygon(elementTxt, coordinatesObj);
  // }
}


function getCheckboxEl(layerName, type){
  if(document.getElementById(layerName+"-gfiCheckboxDiv")===null){
    return false;
  }
  var checkboxes=document.getElementById(layerName+"-gfiCheckboxDiv").children;
  if(type==="border"){
    return checkboxes[0].children[0];
  }else if(type==="feature"){
    return checkboxes[1].children[0];
  }else if(type==="lag"){
    return checkboxes[2].children[0];
  }else{
    return "error";
  }
}

function GFIBorderCheckboxEvent(target){
  var layerName = target.parentNode.parentNode.id.split("-")[0];
  var coordinatesObj = tjenesteObjects[layerName].Geometry;
  var imageElement = document.getElementById(layerName+"-GFI").children[0].children[1];
  if(!$(target).hasClass("checked")){ //skru på
    GFI.drawnKommuneData.push(layerName);
    showPolygonColor(imageElement);
    showPolygon(layerName);
    var coordinatesObj = tjenesteObjects[layerName].Geometry;
    updateActiveCheckboxObj(layerName, "border", true);
  }else{
    removeElementInList(GFI.drawnKommuneData, layerName);
    hidePolygonColor(imageElement);
    hidePolygon(layerName);
    updateActiveCheckboxObj(layerName, "border", false);
  }
  // $(event.target).toggleClass("checked");
  toggleSpecificGFICheckbox(target);
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

function addInfoList(infoDiv, featureName){
  var infoList = document.createElement("ul");
  infoList.className = "gfiInfoList "+ featureName;
  infoList.id=featureName+"-GFIinfo";
  var checks=getCapabilityCheckboxes(featureName);
  infoList.appendChild(checks);
  infoDiv.appendChild(infoList);
  return infoList;
}

function addFeatureInfoText(name, value, infoList, featureName){
  var liElement = document.createElement("li");
  liElement.className = "gfiInfoListElement";
  infoList.appendChild(liElement);

  var liText = document.createElement("div");
  liText.className = "gfiInfoText";
  liElement.appendChild(liText);

  var descr = document.createElement("span");
  descr.className = name;
  $(descr).addClass("infoDescription");
  descr.innerHTML = name + ": ";
  liText.appendChild(descr);

  var valueTxt = document.createElement("span");
  valueTxt.className = value;
  valueTxt.innerHTML = common.formatName(value);
  $(valueTxt).addClass("infoValue");
  liText.appendChild(valueTxt);
}

function addLink(link, parent, description){
  var a = document.createElement("a");
  a.className ="link";
  a.innerHTML =description;
  a.href = link;
  a.target = "_blank"; //Make popup link

  var liElement = document.createElement("li");
  liElement.appendChild(a);
  parent.appendChild(liElement);
}

function hasPolygon(id){
  if(map.getLayer(id)!=undefined){
    return true;
  } else {
    return false;
  }
}

function addPolygon(coordinatesObj, id, color){
  var polygon = makeGeojsonFeature(coordinatesObj);
  var sourceObj2=getSourceObj2(polygon);
  map.addSource(id,sourceObj2);
  var layerObj2=paintPolygon(id, color);
  map.addLayer(layerObj2, color);
  activePolygons.push(id);
}

function removePolygon(id){
  map.removeLayer(id);
  map.removeSource(id);
  removeElementInList(activePolygons, id);
}

function hidePolygon(id){
  map.setLayoutProperty(id, 'visibility', 'none');
}

function showPolygon(id){
  map.setLayoutProperty(id, 'visibility', 'visible');
}

function addColorBobble(parent, color, before){
  var colCircle = document.createElement("div");
  colCircle.className = "colorImage";
  colCircle.style.backgroundColor = color;
  parent.insertBefore(colCircle, before);
}
function showPolygonColor(imageObj){
  $(imageObj).css({ opacity: 1});
}
function hidePolygonColor(imageObj){
  $(imageObj).css({ opacity: 0});
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

$('#closeInfoSidebar').click(function(){
  closeInfoSidebar();
});

function closeInfoSidebar(){
  menuState.infoSidebarStatus = false;
  $("#infoSidebar").removeClass("gfi-sidenavOpen");
  toggleSlideOfMapCtrl();
  map.removeLayer("marker");
  map.removeSource("marker");

  while (activePolygons.length > 0) {
    removePolygon(activePolygons[0]);
    removeFeatureRasterPolygon(activePolygons[0]);
  }
}


function GFIcheckboxClickEvent(className, ulForInfobox, target){ //target is checkbox element
  var layerName=ulForInfobox.id.split("-")[0];
  if(className==="lagCheckbox"){
    // var targetEl=getDomElementFromLayerList(getElementFeatureNameFromCheckbox(target));
    raster.layerClickEvent(layerName);
  }else if(className==="borderCheckbox"){
    GFIBorderCheckboxEvent(target);
  }else if(className==="featureCheckbox"){
    var coordinatesObj = tjenesteObjects[layerName].Geometry;
    updateFeatureRasterPolygon(layerName, coordinatesObj);
  }
  // toggleGFICheckbox(layerName);
}

getDomElementFromLayerList=function(name){
  var list=document.getElementById("layerList").children;
  for(var i=0; i<list.length; i++){
    if(list[i].getAttribute("name") === name){
      return list[i].children[1];
    }
  }
  return false;
}

toggleGFICheckbox=function(layerName, type){
  var box=document.getElementById(layerName+"-gfiCheckboxDiv");
  if(box.checked===true){
    box.checked=false;
  }else{
    box.checked=true;
  }
}

toggleSpecificGFICheckbox=function(el, state){
  if($(el).hasClass("checked")===true){
    if(state===true){
        //do nothing, already on
    }else{
      $(el).removeClass("checked");
    }
  }else{
    $(el).addClass("checked");
  }
}

function updateActiveCheckboxObj(layerName, type, active){
  if(GFI.activeCheckbuttons[layerName]===undefined){
    GFI.activeCheckbuttons[layerName]={};
  }
  GFI.activeCheckbuttons[layerName][type]={"active":active};
}
function isActiveCheckbutton(layerName, type){
  return GFI.activeCheckbuttons[layerName][type];
}
