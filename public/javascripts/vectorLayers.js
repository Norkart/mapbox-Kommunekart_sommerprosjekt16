//Turn on/off layers based on groups in json
var symbolGroups=[
  "Vegskilt",
  "Tekst_Vann",
  "OSM_Labels",
  //"Skrivemaate_N1000-N500",
  "Skrivemaate_N5000"
];
var symobolLayers=[
  "rail-station-label",
  "contour-index-label"
];

var groupIds=[];
//get name of groups that makes out all symbols:
var layerGroups=layers.metadata["mapbox:groups"];
console.log(layerGroups);
for(var group in layerGroups){
  for(var i=0; i<symbolGroups.length; i++){
    if(layerGroups[group].name === symbolGroups[i]){
      groupIds.push(group);
    }
  }
}

//Symbols listener:
document.getElementById("symbolLayers").addEventListener("click", function(){
  //go through all layers and see if either name is in symbolLayers or group is in groupIds:
  var layerList=layers.layers;
  for(var i=0; i<layerList.length; i++){
    var layer=layerList[i];
    toggleIfPartOfGroup(layer);
  }
});

function toggleIfPartOfGroup(layer){
  if(layer.metadata){ // if has a layer group
    for(var j=0; j<groupIds.length; j++){ //check if correct group
      if(layer.metadata["mapbox:group"] === groupIds[j]){
        if(map.getLayoutProperty(layer.id, 'visibility')==="visible"){
          //console.log("trying to hide visible layers");
          map.setLayoutProperty(layer.id, 'visibility', 'none');
          //console.log(layer.layout);
        }else if(map.getLayoutProperty(layer.id, 'visibility')){
          console.log("trying to show hidden layers");
          console.log(layer.id);
          console.log("foor: ");
          console.log(map.getLayoutProperty(layer.id, 'visibility'));
          map.setLayoutProperty(layer.id, 'visibility', 'visible');
          setTimeout(function(){
            console.log("etter: ");
            console.log(map.getLayoutProperty(layer.id, 'visibility'));
          }, 3000);
        }else{
          console.log(map.getLayoutProperty(layer.id, 'visibility'));
        }

      }
    }
  }else {
    toggleIfOtherSymbolLayer(layer);
    console.log("no groupd");
  }
}

function toggleIfOtherSymbolLayer(layer){
  for(var j=0; j<symbolLayers.length; j++){
    if(layer.id===symbolLayers[j]){
      if(map.getLayoutProperty(layer.id, 'visibility')==="visible"){
        map.setLayoutProperty(layer.id, 'visibility', 'none');
      }else{
        map.setLayoutProperty(layer.id, 'visibility', 'visible');
      }
    }
  }
}
