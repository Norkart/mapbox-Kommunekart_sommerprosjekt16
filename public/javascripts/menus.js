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
    kommuneDiv.setAttribute("nr", res[i].Number);
    //adding on click event for choosing kommune - fly to and create menu
    kommuneDiv.addEventListener("click", function(){
      console.log(event.currentTarget);
      flyTo(event.currentTarget.id);
      resetRasterOverlays();
      setRasterOverlayMenu(event.currentTarget.getAttribute("nr"), event.currentTarget.id+"element");
    });

    var kommuneName=document.createElement("h4");
    kommuneName.innerHTML=res[i].Name;
    var kommuneLogo=document.createElement("img");
    kommuneLogo.setAttribute("src", res[i].Logo);
    //var arrow=document.createElement("img");
    //arrow.setAttribute("src", "https://kommunekart.com/Images/ikoner/nk_025-hoyrepil-B-48px.png")
    //var arrowDiv=document.createElement("div");
    //arrowDiv.appendChild(arrow);
    //arrowDiv.id="arrow";

    kommuneDiv.appendChild(kommuneLogo);
    kommuneDiv.appendChild(kommuneName);
    //kommuneDiv.appendChild(arrowDiv);
    kommuneElement.appendChild(kommuneDiv);

    var kommuner=document.getElementById("kommuneList");
    kommuner.appendChild(kommuneElement);
  }

});


var kommuneList=[];

document.getElementById("sprite-chevron-down").addEventListener("click", function(){
  $("#kommuneList").toggleClass("dropdownVisible");
  $("#side-menu-toggle-button").removeClass("sidenavOpen");
  $("#kommuneListPointer").toggleClass("pointer-down pointer-up");

});

$('.kommunekart-logo').click(function(){
  window.open("http://www.norkart.no/");
});


$('.tool-button-del').click(function(){
  $('#del-info').toggleClass("toolMenuOpen");
});
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

document.getElementById("side-menu-toggle-button").addEventListener("click", function(){

  $("#menu-selector").toggleClass("sidenavOpen");

  if($("#kommuneList").is(":visible")){
    $("#kommuneList").removeClass("dropdownVisible");
    $("#kommuneListPointer").toggleClass("pointer-down pointer-up");
  }
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
