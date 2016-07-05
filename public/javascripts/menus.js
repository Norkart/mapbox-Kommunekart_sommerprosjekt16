
//get kommuner fra db to display in menu - same always
createKommuneList();


function createKommuneList(){
  $.ajax({
    url:"https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetRegisteredAppCustomers?appID=VectortilesDemo",
  }).done(function(res){
    var list=document.createElement("ul");
    list.className="list";
    for(var i=0; i<res.length; i++){
      var kommuneId=res[i].Number;
      kommuneObjectList[kommuneId]=res[i]; //save kommune object to list for later use (kommune on click event ++)
      // kommuneObjectList.push(res[i]);
      var kommuneElement=document.createElement("li");
      kommuneElement.className="kommuneElement";
      kommuneElement.id=i+"element";
      var kommuneDiv=document.createElement("div");
      kommuneDiv.setAttribute("kommune",res[i].Name);
      kommuneDiv.setAttribute("nr", res[i].Number);
      //adding on click event for choosing kommune - fly to and create menu
      kommuneDiv.addEventListener("click", function(){
        kommuneElementClicked=true;
        resetRasterOverlays();
        setRasterOverlayMenu(event.currentTarget.getAttribute("nr"));
        setKommuneMenuHeader(event.currentTarget, event.currentTarget.getAttribute("kommune"));
        menuState.chosenKommuneId=event.currentTarget.getAttribute("nr");
        menuState.type="raster";
        flyTo();
      });
      var kommuneName=document.createElement("h4");
      kommuneName.className="kommunename";
      kommuneName.innerHTML=res[i].Name;
      var kommuneLogo=document.createElement("img");
      kommuneLogo.setAttribute("src", res[i].Logo);
      kommuneDiv.setAttribute("kommuneSkiltLogo",res[i].Logo);

      kommuneDiv.appendChild(kommuneLogo);
      kommuneDiv.appendChild(kommuneName);
      kommuneElement.appendChild(kommuneDiv);

      var kommuner=document.getElementById("kommuneList");
      //testing div around all kommune elements:
      // var kommunerDiv=document.createElement("div");
      // kommunerDiv.id="searchList";

      list.appendChild(kommuneElement);
    }
    kommuner.appendChild(list);
    //make searchable
    var options={
      valueNames:['kommunename']
    };
    var kommuneList=new List('kommuneList', options);
  });
}

function createRasterLayerMenu(layerInfoJson){
  var rasterMenu=document.createElement("ul");
  rasterMenu.id="layerList";
  rasterMenu.className="sideMenuLists";

  layerArea=layerInfoJson[0].Name;
  for(var i=0; i<layerInfoJson[0].Layers.length; i++){
    var rasterElement = document.createElement("li");
    layerName=layerInfoJson[0].Layers[i].Name;
    layerNameMenu=layerInfoJson[0].Layers[i].Description;
    formattedLayerName=formatName(layerNameMenu);
    rasterElement.setAttribute("name",layerName);
    rasterElement.setAttribute("area",layerArea);
    rasterElement.setAttribute("active", false);
    rasterElement.innerHTML=formattedLayerName;
    rasterElement.addEventListener("click", function(){
      rasterLayerClickEvent();
    });
    //adding raster element to raster list:
    rasterMenu.appendChild(rasterElement);
    menuState.type="raster";
  }
  //adding the raster overlays list to kommune element
  document.getElementById("kommunekart-menu").appendChild(rasterMenu);
  //$("#layerList").addClass("kommuneDropdownVisible");
}

//if zoomLevel is lower than 9.5 --> unselect kommune, go back to "Velg kommune" text, and remove raster layer: same as x functionality?
// map.on('moveend', function(){
//   console.log("moveend");
//   // console.log(event.currentTarget);
//   // && event.currentTarget.id!== "backToKommuneList"
//
// });

function setKommuneMenuHeader(target, kommuneName, moveEvent){
  //set chosen kommune name above list, instead of "velg kommune"
  document.getElementById("choose-kommune-text").innerHTML=kommuneName;
  //add kommune icon
  var kommuneIcon=target.firstChild.cloneNode(true);
  if(document.getElementById("kommuneHeaderImg")==undefined){
    kommuneIcon.id="kommuneHeaderImg";
    document.getElementById("kommunekart-menu-button").insertBefore(kommuneIcon, document.getElementById("kommunekart-menu-button").firstChild);
  }else if(document.getElementById("kommuneHeaderImg") !=undefined){ //only change url for image
    var img=document.getElementById("kommuneHeaderImg");
    img.setAttribute("src", target.getAttribute("kommuneSkiltLogo"));
  }
  if(menuState.chosenKommuneId==false){
      // console.log("no active kommune yet");
      var backButton=document.createElement("button");
      backButton.id="backToKommuneList";
      backButton.innerHTML="x";
      backButton.addEventListener("click", function(){
      //console.log("back to raster");
      map.flyTo({zoom:9});
      // map.setZoom(9.4);
      unselectKommune();
    });
    document.getElementById("kommunekart-menu-button").insertBefore(backButton, document.getElementById("kommunekart-menu-button").firstChild);
  }
}

function unselectKommune(){ //back button event
  //console.log("unselect");
  //console.log(document.getElementById("kommunekart-menu-button").children.length);
  menuState.type="kommune";
  //delete back button and kommune icon: two first items
  if(document.getElementById("kommunekart-menu-button").children.length===4){ //means that the header is set to a kommune
    document.getElementById("kommunekart-menu-button").removeChild(document.getElementById("kommunekart-menu-button").firstChild);
    document.getElementById("kommunekart-menu-button").removeChild(document.getElementById("kommunekart-menu-button").firstChild);
    document.getElementById("choose-kommune-text").innerHTML="Velg kommune";
  }
  //change inner html:
  hideKommuneMenuContent("raster");
  if(menuState.kommuneMenuOpen){
    showKommuneMenuContent("kommune");
  }
  menuState.chosenKommuneId=false;
}


function hideKommuneMenuContent(type){
  $("#menu-selector").removeClass("removeOverflow"); //Make it not scroll
  //slide down baselayers and off/on vector layers (annet, symboler)
  $("#kommuneListPointer").removeClass("pointer-down");
  $("#kommuneListPointer").addClass("pointer-right");
  //slide down baselayers and off/on vector layers (annet, symboler)
  $("#select-baselayer").removeClass("kommuneDropdownVisibleShowBaselayers");
  $("#vectorLayers").removeClass("kommuneDropdownVisibleShowVectorLayers");

  $("#kommuneList").removeClass("kommuneDropdownVisible");
  if(type==="kommune"){
    $("#kommunekart-menu").removeClass("kommuneMenuSlideDown");
  }else if(type==="raster"){
    $("#layerList").addClass("dropdownHide");
    $("#layerList").removeClass("kommuneDropdownVisible");
  }
  menuState.kommuneMenuOpen=false;
}

function showKommuneMenuContent(type){
  $("#menu-selector").addClass("removeOverflow"); //Make it not scroll
  //slide down baselayers and off/on vector layers (annet, symboler)
  $("#kommuneListPointer").removeClass("pointer-right");
  $("#kommuneListPointer").addClass("pointer-down");
  //make baselayer selector always show at bottom of sidemeny, and hide the rest
  $("#select-baselayer").addClass("kommuneDropdownVisibleShowBaselayers");
  $("#vectorLayers").addClass("kommuneDropdownVisibleShowVectorLayers");
  if(type ==="kommune"){
    $("#kommuneList").addClass("kommuneDropdownVisible");
    $("#kommunekart-menu").addClass("kommuneMenuSlideDown");
  }else if(type === "raster"){
    $("#layerList").removeClass("dropdownHide");
    $("#layerList").addClass("kommuneDropdownVisible");
    $("#kommuneList").removeClass("kommuneDropdownVisible");

  }
  menuState.kommuneMenuOpen=true;
}


//LISTENERS: ------------------------------------------------------------------------------------

//on click sidemenu: if overflow -add padding, if not -remove padding
document.getElementById('menu-selector').addEventListener("click", function(){
  var el=document.getElementById('menu-selector');
});

//"Velg kommune" is clicked, kommunelist shown/hidden
document.getElementById("kommunekart-menu-button").addEventListener("click", function(){
  if(event.target.id ==="backToKommuneList"){
    return; //dont fire this event
  }
  if(menuState.kommuneMenuOpen){
    hideKommuneMenuContent(menuState.type);
  }else{
    showKommuneMenuContent(menuState.type);
  }
});

//when toggle side menu button is clicked: side menu hidden/shown
document.getElementById("side-menu-toggle-button").addEventListener("click", function(){
  $("#menu-selector").toggleClass("sidenavOpen");
  if(menuState.sideNavOpen){
    var actualMenuState=menuState.kommuneMenuOpen;
    hideKommuneMenuContent(menuState.type);
    menuState.kommuneMenuOpen=actualMenuState;
    menuState.sideNavOpen=false;
  }else{
    // //console.log(menuState.kommuneMenuOpen);
    if(menuState.kommuneMenuOpen){
      showKommuneMenuContent(menuState.type);
    }
    menuState.sideNavOpen=true;
  }
  updateTopKommuneHeader();
});

//Logo on the map
$('.kommunekart-logo').click(function(){
  window.open("http://www.norkart.no/");
});

//When "Verktoy" is clicked: dropdown menu shows
$("#toolHeader").click(function(){
  $("#toolList").toggleClass("hide");
  $("#toolPointer").toggleClass("pointer-right pointer-down");
})

//Different tools:
//Del verktoy
$('.tool-button-del').click(function(){
  $('#del-info').toggleClass("toolMenuOpen");
});
//Avstand verktoy
$('.tool-button-avstand').click(function(){
  startMeasureModus();
   $('.tool-button-avstand').addClass("activeListElement");
});

$('.tool-button-print').click(function(){
  $('#print-info').toggleClass("toolMenuOpen");
});
$('.tool-button-draw').click(function(){
  $('#draw-info').toggleClass("toolMenuOpen");
});
$('.tool-button-navigation').click(function(){
  $('#navigation-info').toggleClass("toolMenuOpen");
});


var infoPopupStatus = 0;
//Info popup
$('.tool-button-om').click(function(){
  if(infoPopupStatus ==0){
    $(".modal-shadow").fadeIn("slow");
    $("#modal-info-content").fadeIn("slow");
    infoPopupStatus = 1;
  }
});
//Closing popups:
$('.about-close-button').click(function(){
  if(infoPopupStatus ==1){
    $(".modal-shadow").fadeOut("slow");
    $("#modal-info-content").fadeOut("slow");
    infoPopupStatus = 0;
  }
});
$('.modal-shadow').click(function(){
  if(infoPopupStatus ==1){
    $(".modal-shadow").fadeOut("slow");
    $("#modal-info-content").fadeOut("slow");
    infoPopupStatus = 0;
  }
});
$('.normal').click(function(){
  if(mapStyle==="aerial"){
    $('.aerial').toggleClass('selected');
    $('.normal').toggleClass('selected');
  }
  map.setStyle(layers);
  mapStyle ="normal";
  wmsUrl="http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers=";
});

$('.aerial').click(function(){
  //console.log("changing to flyfoto");
  map.setStyle(flyfoto);
  if(mapStyle==="normal"){
    $('.aerial').toggleClass('selected');
    $('.normal').toggleClass('selected');
  }
  mapStyle ="aerial";
  setTimeout(function(){
    addRaster("http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers=TMS_WEBATLAS_STANDARD:1", "rasterOverlay", 10);
  }, 1000);
  console.log("loaded");

  wmsUrl = "http://www.webatlas.no/wacloudtest/servicerepository/combine.aspx?X={x}&Y={y}&Z={z}&layers=TMS_WEBATLAS_STANDARD:1;";
});
$('#closeInfoSidebar').click(function(){
  menuState.infoSidebarStatus = false;
  $("#infoSidebar").toggleClass("sidenavOpen");
});
