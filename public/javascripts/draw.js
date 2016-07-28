
var Draw = mapboxgl.Draw();
map.addControl(Draw);
disableDraw();
// enableDraw();//just while working


//expand controller:
setStyleCtrl();
setExitCtrl();


map.on("click", function(){
  var selected=draw.getSelectedIds();
  if(selected!=undefined){
    enableStyling();
  }else{
    disableStyling();
  }
});

function disableStyling(){
  document.getElementById("styleDraw").disabled="true";
}

//change styling of drawn element
function setStyleCtrl(){
  var style=getCtrlDomElement("Change styling", "styleDraw"); //title, id
  style.addEventListener("click", function(){
    toggleStylePopup();
  });
}

function toggleStylePopup(){
  console.log("TOGGLE STYLE POPUP");
  if(document.getElementById("stylePopup")!=undefined){
    //remove popup
    $("#stylePopup").remove();
  }else{
    //add popup
    // var typeToStyle=Draw.getSelectedIds().geometry.type;
    var typeToStyle="point"; //just while working
    var parameters=getStyleParameters(typeToStyle);
    console.log(parameters);
    createStylePopup(parameters);
    //style the layer that is selected
  }
}

function getStyleParameters(type){
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

function createStylePopup(parameters){
  var div=getEl("div");
  div.id="stylePopup";
  var content=getEl("ul");
  for(var i=0; i<parameters.length; i++){
    createStyleControlForParameter(parameters[i], content);
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

function createStyleControlForParameter(parameter, content){
  var li=getEl("li");
  var txt=getEl("h4");
  txt.innerHTML=parameter.name+":";
  if(parameter.type==="range"){
    var input=getDrawSlider(parameter);
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

function getDrawSlider(parameter){
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

function getEl(type){
  return document.createElement(type);
}

//add exit button that disbale draw mode:
function setExitCtrl(){
  var exit=getCtrlDomElement("Exit draw", "exitDraw");
  exit.addEventListener("click", function(){
    enableToolButton("tool-button-draw");
    disableDraw();
  });
}

function getCtrlDomElement(title, className){
  var ctrlDiv=document.getElementsByClassName("mapboxgl-ctrl-group")[0];
  var button=document.createElement("button");
  button.className="mapbox-gl-draw_ctrl-draw-btn "+className+" disable";
  button.title=title;
  button.id=className;
  button.disabled=true;
  ctrlDiv.appendChild(button);
  return button;
}

function enableDraw(){
  mapmodus="draw";
  console.log("enable draw");
  $(".mapboxgl-ctrl-top-left").show();
}

function disableDraw(){
  mapmodus="popup";
  console.log("disbale draw");
  $(".mapboxgl-ctrl-top-left").hide();
  // Draw.changeMode("static");
  Draw.changeMode("simple_select");
}
