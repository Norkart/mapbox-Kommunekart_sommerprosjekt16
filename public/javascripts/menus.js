var activePolygons = [];

//get kommuner fra db to display in menu - same always
createKommuneList();

function createKommuneDomElement(resEl, list){
  var kommuneElement=document.createElement("li");
  var kommuneDiv=document.createElement("div");
  kommuneElement.className="kommuneElement";
  kommuneElement.id=i+"element";
  kommuneDiv.setAttribute("kommune",resEl.Name);
  kommuneDiv.setAttribute("nr", resEl.Number);
  //adding on click event for choosing kommune - fly to and create menu
  kommuneElement.addEventListener("click", function(){
    kommuneClickEvent();
  });
  var kommuneName=document.createElement("h4");
  kommuneName.className="kommunename";
  kommuneName.innerHTML=resEl.Name;
  var kommuneLogo=document.createElement("img");
  kommuneLogo.setAttribute("src", resEl.Logo);
  kommuneDiv.setAttribute("kommuneSkiltLogo",resEl.Logo);
  kommuneDiv.appendChild(kommuneLogo);
  kommuneDiv.appendChild(kommuneName);
  kommuneElement.appendChild(kommuneDiv);
  list.appendChild(kommuneElement);
}

function kommuneClickEvent(){
  kommuneElementClicked=true;
  raster.resetOverlays();
  raster.setOverlayMenu(event.currentTarget.firstChild.getAttribute("nr"));
  setKommuneMenuHeader(event.currentTarget.firstChild, event.currentTarget.firstChild.getAttribute("kommune"));
  menuState.chosenKommuneId=event.currentTarget.firstChild.getAttribute("nr");
  menuState.type="raster";
  flyTo();
}

function createKommuneList(){
  $.ajax({
    url:"https://www.webatlas.no/wacloudtest/servicerepository/CatalogueService.svc/json/GetRegisteredAppCustomers?appID=VectortilesDemo",
  }).done(function(res){
    var list=document.createElement("ul");
    list.className="list";
    for(var i=0; i<res.length; i++){
      var kommuneId=res[i].Number;
      kommuneObjectList[kommuneId]=res[i]; //save kommune object to list for later use (kommune on click event ++)
      createKommuneDomElement(res[i], list);
    }
    var kommuner=document.getElementById("kommuneList");
    kommuner.appendChild(list);
    //make searchable
    var options={
      valueNames:['kommunename'],
      plugins: [ ListFuzzySearch() ]
    };
    var kommuneList=new List('kommuneList', options);
  });
}

function createRasterLayerMenu(categoriesJson){ //categoriesJson is the list with catogoeries of layer for kommune
  var rasterMenu=document.createElement("ul");
  rasterMenu.id="layerList";
  rasterMenu.className="sideMenuLists";
  // layerAreas =[];
  rasterMenu.className="raster sideMenuLists";
  for(var j=0; j<categoriesJson.length; j++){
    layerArea=categoriesJson[j].Name;
    // layerAreas.push(categoriesJson[j].Name);
    var cat=document.createElement("h4");
    cat.innerHTML=categoriesJson[j].Title;
    rasterMenu.appendChild(cat);
    layerInfoJson=categoriesJson[j];
    for(var i=0; i<layerInfoJson.Layers.length; i++){
      var rasterElement = document.createElement("li");
      layerName=layerInfoJson.Layers[i].Name;
      layerNameMenu=layerInfoJson.Layers[i].Description;
      formattedLayerName=common.formatName(layerNameMenu);
      rasterElement.setAttribute("name",layerName);
      rasterElement.setAttribute("area",layerArea);
      rasterElement.setAttribute("active", false);
      // rasterElement.innerHTML=formattedLayerName;
      var tekst = document.createElement("span");
      tekst.innerHTML = formattedLayerName;
      rasterElement.appendChild(tekst);
      var checkbox = document.createElement("button");
      checkbox.className="check";
      rasterElement.appendChild(checkbox);
      checkbox.addEventListener("click", function(){
        raster.layerClickEvent(event.currentTarget);
        // checkbox.toggleClass("checked");

      });
      //adding raster element to raster list:
      rasterMenu.appendChild(rasterElement);
      menuState.type="raster";
    }
  }
  //adding the raster overlays list to kommune element
  document.getElementById("kommunekart-menu").appendChild(rasterMenu);
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
  var kommune = document.createElement("div");
  kommune.id = "chosenKommune";
  var tekst = document.createElement("span");
  kommune.appendChild(tekst);
  tekst.innerHTML = kommuneName;
  var parent = document.getElementById("kommunekart-menu");
  var kommunelist = document.getElementById("kommuneList");
  parent.insertBefore(kommune, kommunelist);
  //add kommune icon
  var kommuneIcon=target.firstChild.cloneNode(true);
  if(document.getElementById("kommuneHeaderImg")==undefined){
    kommuneIcon.id="kommuneHeaderImg";
    kommune.insertBefore(kommuneIcon, kommune.firstChild);
  }else if(document.getElementById("kommuneHeaderImg") !=undefined){ //only change url for image
    var img=document.getElementById("kommuneHeaderImg");
    img.setAttribute("src", target.getAttribute("kommuneSkiltLogo"));
  }
  if(menuState.chosenKommuneId==false){
    createKommuneBackButton();
  }
  setNavCtrl(); //show border and show center
}
// function setKommuneMenuHeader(target, kommuneName, moveEvent){
//   //set chosen kommune name above list, instead of "velg kommune"
//   document.getElementById("choose-kommune-text").innerHTML=kommuneName;
//   //add kommune icon
//   var kommuneIcon=target.firstChild.cloneNode(true);
//   if(document.getElementById("kommuneHeaderImg")==undefined){
//     kommuneIcon.id="kommuneHeaderImg";
//     document.getElementById("kommunekart-menu-button").insertBefore(kommuneIcon, document.getElementById("kommunekart-menu-button").firstChild);
//   }else if(document.getElementById("kommuneHeaderImg") !=undefined){ //only change url for image
//     var img=document.getElementById("kommuneHeaderImg");
//     img.setAttribute("src", target.getAttribute("kommuneSkiltLogo"));
//   }
//   if(menuState.chosenKommuneId==false){
//     createKommuneBackButton();
//   }
//   setNavCtrl(); //show border and show center
// }

function setNavCtrl(){
  //check if already exist
  if(document.getElementById("showKommune")!=undefined){
    return;
  }

  var navCtrl=document.createElement("div");
  navCtrl.id="navControllers";
  var kom=document.createElement("div");
  kom.id="showKommune";
  kom.title="Trykk for å vise hele kommunen";
  kom.addEventListener("click", function(e){
    console.log("kommune");
    zoomToWholeMunicipality();
    e.stopPropagation();
  });
  var center=document.createElement("div");
  center.id="showCenter";
  center.title="Trykk for å gå til sentrum av kommunen";
  center.addEventListener("click", function(e){
    console.log("CENTER");
    zoomToCenterOfMunicipality();
    e.stopPropagation();
  });
  navCtrl.appendChild(kom);
  navCtrl.appendChild(center);
  document.getElementById("chosenKommune").appendChild(navCtrl);
}

function createKommuneBackButton(){
  var backButton=document.createElement("button");
  backButton.id="backToKommuneList";
  backButton.className="pointer";
  backButton.addEventListener("click", function(){
    map.flyTo({zoom:9});
    if(menuState.kommuneMenuOpen){
      unselectKommune();
      showKommuneMenuContent(menuState.type);
    }else{
      unselectKommune();
    }
  });
  document.getElementById("kommunekart-menu-button").insertBefore(backButton, document.getElementById("kommunekart-menu-button").firstChild);
}

function unselectKommune(){ //back button event
  menuState.type="kommune";
  //delete back button and kommune icon: two first items
  if(document.getElementById("chosenKommune")!=undefined){ //means that the header is set to a kommune
    document.getElementById("kommunekart-menu").removeChild(document.getElementById("chosenKommune"));
    document.getElementById("kommunekart-menu-button").removeChild(document.getElementById("backToKommuneList"));
  }
  //change inner html:
  hideKommuneMenuContent("raster");
  if(menuState.kommuneMenuOpen){
    showKommuneMenuContent("kommune");
  }
  menuState.chosenKommuneId=false;
  globalActiveLayernames=[];
}


function hideKommuneMenuContent(type){
  $("#kommuneList").removeClass("kommuneDropdownVisible");
  $("#menu-selector").removeClass("removeOverflow"); //Make it not scroll
  $("#kommuneListPointer").removeClass("pointer-down");
  $("#kommuneListPointer").addClass("pointer-right");

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
  //slide down baselayers and off/on vector layers (annet, symboler++)
  $("#kommuneListPointer").removeClass("pointer-right");
  $("#kommuneListPointer").addClass("pointer-down");
  //make baselayer selector always show at bottom of sidemeny, and hide the rest
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
  console.log("fired open/close listener");
  if(event.target.id ==="backToKommuneList" || event.target.id ==="showKommune" || event.target.id==="showCenter"){
    console.log("Dont fire open/close event");
    return; //dont fire this event
  }
  if(menuState.kommuneMenuOpen){
    hideKommuneMenuContent(menuState.type);
  }else{
    showKommuneMenuContent(menuState.type);
  }
});

function toggleSideMenu(){
  $("#menu-selector").toggleClass("sidenavOpen");
  if(menuState.sideNavOpen){ //CLOSING menu
    var actualMenuState=menuState.kommuneMenuOpen;
    hideKommuneMenuContent(menuState.type);
    menuState.kommuneMenuOpen=actualMenuState;
    menuState.sideNavOpen=false;
    //moveBurgerIcon in
    $("#side-menu-toggle-button").addClass("burger-icon-close");
    $("#searchBox").addClass("search-menu-closed");
    //add burger menu, and change position of searh box
    $("#searchBox").removeClass("searchToggle-open");
    $("#closeSidebar").hide();
    $("#side-menu-toggle").removeClass("open");
  }else{ //OPENING menu
    // //console.log(menuState.kommuneMenuOpen);
    if(menuState.kommuneMenuOpen){
      showKommuneMenuContent(menuState.type);
    }
    menuState.sideNavOpen=true;
    $("#searchBox").removeClass("search-menu-closed");
    //making transition better: first adding class width width 0, then add class with correct width and transition
    $("#searchBox").addClass("searchToggle-open");//add burger menu, and change position of search box
    $("#side-menu-toggle").addClass("open");
    $("#closeSidebar").show();
    $("#side-menu-toggle-button").removeClass("burger-icon-close");
  }
  updateTopKommuneHeader();
}
//when toggle side menu button is clicked: side menu hidden/shown
document.getElementById("side-menu-toggle-button").addEventListener("click", function(){
  toggleSideMenu();
});
document.getElementById("closeSidebar").addEventListener("click", function(){
  toggleSideMenu();
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

function enableToolButton(toolId){
  $("#"+toolId).removeClass("toolChosen");
}
function disableToolButton(toolId){
  $("#"+toolId).addClass("toolChosen");
}

//Del verktoy
$('.tool-button-del').click(function(){
  $('#del-info').toggleClass("toolMenuOpen");
});
//Avstand verktoy
$('.tool-button-avstand').click(function(){
  if(mapmodus==="measure"){
    measure.stop();
  }else{
    measure.start();
  }
  // $('.tool-button-avstand').addClass("activeListElement");
});

$('.tool-button-print').click(function(){
  $('#print-info').toggleClass("toolMenuOpen");
});

$('.tool-button-draw').click(function(){
  if($("#tool-button-draw").hasClass("toolChosen")){ //tool chosen
    draw.disableDraw();
  }else{
    draw.enableDraw();
  }
});
$('.tool-button').click(function(e){
  console.log("toolbtn click");
  console.log(event.currentTarget);
  toggleToolButtonView(e.currentTarget.id);
});

function toggleToolButtonView(toolName){
  if($("#"+toolName).hasClass("toolChosen")){ //tool chosen
    enableToolButton(toolName);
  }else{
    disableToolButton(toolName);
  }
}

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

//Change backgroundmaps
$('.normal').click(function(event){
  if($(this).hasClass("selected")){
    return;
  }
  changeBackgroundMap("normal");
});
$('.aerial').click(function(event){
  if($(this).hasClass("selected")){
    return;
  }
  changeBackgroundMap("aerial");
});
