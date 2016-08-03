var draw={
  style:{}
};
var Draw;

draw.init=function(){
  Draw= mapboxgl.Draw();
  map.addControl(Draw);
  draw.disableDraw();
  // draw.enableDraw();//just while working

  draw.setStyleCtrl()
  draw.setExitCtrl();
  draw.updateCtrl();
}


map.on("click", function(){
  if(mapmodus!=="draw"){
    return;
  }
  draw.updateCtrl(); //see if some buttons should be disabled/enabled depeneding on if any drawn elements are chosen or not
});


draw.style.ctrlClick=function(){
  console.log("click");
  draw.style.togglePopup();
  var activeElements=Draw.getSelectedIds();
  draw.style.setStartValues(activeElements[0]);
  //"gl-draw-point-active.hot" er id til tegnede style layers
  var styleId="gl-draw-polygon-active.hot";
  //"gl-draw-polygon-stroke-active.hot"
  // map.getStyle("gl-draw-point-active.hot");
  map.setPaintProperty(styleId, 'fill-color', '#faafee');
  for(var i=0; i<activeElements.length; i++){
  }
}

draw.style.setStartValues=function(id){
  var gJson=Draw.get(id);
  console.log(gJson);
  console.log(gJson.geometry);
}

draw.updateCtrl=function(){
  var selected=Draw.getSelectedIds();
  if(selected.length>0){
    draw.enableCtrlButton($("#styleDraw"));
    draw.enableCtrlButton($(".mapbox-gl-draw_trash"));
  }else{
    draw.disableCtrlButton($("#styleDraw"));
    draw.disableCtrlButton($(".mapbox-gl-draw_trash"));
  }
}

draw.enableCtrlButton=function(element){
  element.attr("disabled", false);
  element.removeClass("ctrlDisable");
}

draw.disableCtrlButton=function(element){
  element.attr("disabled", true);
  element.addClass("ctrlDisable");
}

//change styling of drawn element
draw.setStyleCtrl=function(){
  var style=draw.getCtrlDomElement("Change styling", "styleDraw"); //title, id
  style.addEventListener("click", function(){
    draw.style.ctrlClick();
  })
}

draw.style.togglePopup=function(){
  if(document.getElementById("stylePopup")!=undefined){
    //remove popup
    $("#stylePopup").remove();
  }else{
    //add popup
    // var typeToStyle=Draw.getSelectedIds().geometry.type;
    var typeToStyle="point"; //just while working
    var parameters=draw.getStyleParameters(typeToStyle);
    console.log(parameters);
    draw.createStylePopup(parameters);
    //style the layer that is selected
  }
}

draw.getStyleParameters=function(type){
  var par=[{
      name: "Farge",
      type: "color"
    },{
      name: "Linjefarge",
      type: "color"
    },{
      name: "Linjetykkelse",
      type: "range"
      // type: "range"
    }];

  if(type==="point"){
    //add specific for point
  }else if(type==="polygon"){

  }else if(type==="marker"){

  }
  return par;
}

draw.createStylePopup=function(parameters){
  var div=getEl("div");
  div.id="stylePopup";
  var content=getEl("ul");
  for(var i=0; i<parameters.length; i++){
    draw.createStyleControlForParameter(parameters[i], content);
  }
  var arrow=getEl("div");
  arrow.className="arrow-left";
  div.appendChild(arrow);
  div.appendChild(content);
  document.getElementById("container").appendChild(div);
  // With JQuery
  $('#ex1').slider({
  	formatter: function(value) {
  		return 'Current value: ' + value;
  	}
  });
}

draw.createStyleControlForParameter=function(parameter, content){
  var li=getEl("li");
  var txt=getEl("h4");
  txt.innerHTML=parameter.name+":";
  if(parameter.type==="range"){
    var input=draw.getDrawSlider(parameter);
  }else{
    var input=getEl("input");
    input.type=parameter.type;
    input.id=parameter.name;
  }
  input.addEventListener("click", function(){

  });
  li.appendChild(txt);
  li.appendChild(input);
  content.appendChild(li);
}

draw.getDrawSlider=function(parameter){
  var input=getEl("input");
  input.type="text";
  // input.id=parameter.name;
  input.id="ex1";
  input.setAttribute("data-slider-id", "ex1Slider");
  input.setAttribute("data-slider-min", 0);
  input.setAttribute("data-slider-max", 10);
  input.setAttribute("data-slider-step", 1);
  input.setAttribute("data-slider-value", 1);

  return input;
}

//add exit button that disbale draw mode:
draw.setExitCtrl=function(){
  var exit=draw.getCtrlDomElement("Exit draw", "exitDraw");
  exit.addEventListener("click", function(){
    enableToolButton("tool-button-draw");
    draw.disableDraw();
  });
}

draw.getCtrlDomElement=function(title, className){
  var ctrlDiv=document.getElementsByClassName("mapboxgl-ctrl-group")[0];
  var button=document.createElement("button");
  // button.className="mapbox-gl-draw_ctrl-draw-btn "+className+" disable";
  button.className="mapbox-gl-draw_ctrl-draw-btn "+className;
  button.title=title;
  button.id=className;
  // button.disabled=true;
  ctrlDiv.appendChild(button);
  return button;
}

draw.enableDraw=function(){
  mapmodus="draw";
  $(".mapboxgl-ctrl-top-left").show();
}

draw.disableDraw=function(){
  mapmodus="popup";
  $(".mapboxgl-ctrl-top-left").hide();
  // Draw.changeMode("static");
  Draw.changeMode("simple_select");
}

draw.init();
