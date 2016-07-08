
var Draw = mapboxgl.Draw();
map.addControl(Draw);
disableDraw();
// enableDraw();//just while working


//expand controller:
setStyleCtrl();
setExitCtrl();

//change styling of drawn element
function setStyleCtrl(){
  var style=getCtrlDomElement("Change styling", "styleDraw"); //title, id
  style.addEventListener("click", function(){
    toggleStylePopup();
  });
}

function toggleStylePopup(){
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
    var li=getEl("li");
    var txt=getEl("h4");
    txt.innerHTML=parameters[i].name+":";
    var input=getEl("input");
    input.type=parameters[i].type;
    input.id=parameters[i].name;
    li.appendChild(txt);
    li.appendChild(input);
    content.appendChild(li);
  }
  div.appendChild(content);
  document.getElementById("container").appendChild(div);
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
  button.className="mapbox-gl-draw_ctrl-draw-btn "+className;
  button.title=title;
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
