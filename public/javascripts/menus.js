var menuState="kommuner";

//get kommuner fra db to display in menu

createKommuneList();

function createKommuneList(){
  $.ajax({
    url:"https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetRegisteredAppCustomers?appID=VectortilesDemo",
  }).done(function(res){
    console.log(res);
    for(var i=0; i<res.length; i++){
      kommuneList.push(res[i]);
      var kommuneElement=document.createElement("li");
      kommuneElement.className="kommuneElement";
      kommuneElement.id=i+"element";
      var kommuneDiv=document.createElement("div");
      kommuneDiv.id=i;
      kommuneDiv.setAttribute("kommune",res[i].Name);
      kommuneDiv.setAttribute("nr", res[i].Number);
      //adding on click event for choosing kommune - fly to and create menu
      kommuneDiv.addEventListener("click", function(){
        flyTo(event.currentTarget.id);
        resetRasterOverlays();
        setRasterOverlayMenu(event.currentTarget.getAttribute("nr"), event.currentTarget.id+"element");
        setKommuneMenuHeader(event.currentTarget, event.currentTarget.getAttribute("kommune"));
        menuState="rasterLayers";

      });
      var kommuneName=document.createElement("h4");
      kommuneName.innerHTML=res[i].Name;
      var kommuneLogo=document.createElement("img");
      kommuneLogo.setAttribute("src", res[i].Logo);

      kommuneDiv.appendChild(kommuneLogo);
      kommuneDiv.appendChild(kommuneName);
      kommuneElement.appendChild(kommuneDiv);

      var kommuner=document.getElementById("kommuneList");
      kommuner.appendChild(kommuneElement);
    }
  });
}

function removeKommuneListMenu(){
  //hide kommuneList element
  $("#kommuneList").empty();
  $("#kommuneList").addClass("dropdownHide");
}


function setKommuneMenuHeader(target, kommuneName){
  //set chosen kommune name above list, instead of "velg kommune"
  document.getElementById("choose-kommune-text").innerHTML=kommuneName;
  //add kommune icon
  var kommuneIcon=target.firstChild;
  document.getElementById("kommunekart-menu-button").insertBefore(kommuneIcon, document.getElementById("kommunekart-menu-button").firstChild);
  var backButton=document.createElement("button");
  backButton.id="backToKommuneList";
  backButton.innerHTML="<";
  backButton.addEventListener("click", function(){
    goFromRasterLayerListToKommuneList();
  });
  document.getElementById("kommunekart-menu-button").insertBefore(backButton, document.getElementById("kommunekart-menu-button").firstChild);
}

function goFromRasterLayerListToKommuneList(){ //back button event
  menuState="kommuner";
  //delete raster layer menu
  //delete back button and kommune icon: two first items
  document.getElementById("kommunekart-menu-button").removeChild(document.getElementById("kommunekart-menu-button").firstChild);
  document.getElementById("kommunekart-menu-button").removeChild(document.getElementById("kommunekart-menu-button").firstChild);

  //change inner html:
  document.getElementById("choose-kommune-text").innerHTML="Velg kommune";

  //delete raster layer list:
  $("#layerList").remove()
  //make kommune list visible, toggle class
  $("#kommuneList").toggleClass("dropdownVisible");

  createKommuneList();
}

var kommuneList=[];


//LISTENERS: ------------------------------------------------------------------------------------

//on click sidemenu: if overflow -add padding, if not -remove padding
document.getElementById('menu-selector').addEventListener("click", function(){
  var el=document.getElementById('menu-selector');
  // if(el.scrollHeight > el.clientHeight){
  //   $("#menu-selector").addClass("scrollPadding");
  // }else{
  //   $("#menu-selector").removeClass("scrollPadding");
  // }
});

//"Velg kommune" is clicked, kommunelist shown/hidden
document.getElementById("kommunekart-menu-button").addEventListener("click", function(){
  //$("#side-menu-toggle-button").removeClass("sidenavOpen");
  $("#kommuneListPointer").toggleClass("pointer-right pointer-down");
  //make baselayer selector always show at bottom of sidemeny, and hide the rest
  $("#menu-selector").toggleClass("removeOverflow");
  //$("#kommuneList").toggleClass()


  //see what list is active:
  if(menuState==="kommuner"){ //show hide kommuner
    // console.log("state is kommuner");
    $("#kommuneList").toggleClass("kommuneDropdownVisible"); //starts closed
    $("#select-baselayer").toggleClass("kommuneDropdownVisibleShowBaselayers");
    $("#vectorLayers").toggleClass("kommuneDropdownVisibleShowVectorLayers");
    $("#kommunekart-menu").toggleClass("kommuneMenuSlideDown");

  }else if(menuState==="rasterLayers"){//show hide raster for kommune
    console.log("state is rasters");
    $("#layerList").toggleClass("dropdownHide"); //starts open
    $("#kommuneList").toggleClass("kommuneDropdownVisible"); //starts closed
    $("#select-baselayer").toggleClass("kommuneDropdownVisibleShowBaselayers");
    $("#vectorLayers").toggleClass("kommuneDropdownVisibleShowVectorLayers");
  }
});

//when toggle side menu button is clicked: side menu hidden/shown
document.getElementById("side-menu-toggle-button").addEventListener("click", function(){
  $("#menu-selector").toggleClass("sidenavOpen");
  $("#baselayerselector").toggleClass("baselayersHidden");

  //if kommunemenu is down, baseselector have to have togge of styling
  if($("#kommunekart-menu").hasClass("kommuneMenuSlideDown")){
    $("#select-baselayer").toggleClass("kommuneDropdownVisibleShowBaselayers");
    $("#vectorLayers").toggleClass("kommuneDropdownVisibleShowVectorLayers");
  }

  if($("#kommuneList").is(":visible")){
    $("#kommuneList").removeClass("dropdownVisible");
  }
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
  map.setStyle("mapbox://styles/keino/cips6baso001sdmm5qfbdurn8");
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
