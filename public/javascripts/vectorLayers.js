//Turn on/off layers based on groups in json

var defaultOffFlyfotoLayers=[];

map.on("load", function(){
  getDefaultOffLayers(flyfoto.layers, defaultOffFlyfotoLayers);
  console.log(defaultOffFlyfotoLayers.length);
})

function getDefaultOffLayers(layers, offLayers){
  for(var i=0; i<layers.length; i++){
    if(layers[i].layout !=undefined){
      if(layers[i].layout.visibility==="none"){ //make sure visibility is a parameter
        offLayers.push(layers[i].id);
      }
    }
  }
}

var annetGroupIDs=[];
//get name of groups that makes out all layers for "annet":
var annetLayerGroups=layers.metadata["mapbox:groups"];
for(var group in annetLayerGroups){
  for(var i=0; i<annetGroups.length; i++){
    if(annetLayerGroups[group].name === annetGroups[i]){
      annetGroupIDs.push(group);
    }
  }
}

//Symbols listener:
document.getElementById("symbolLayers").addEventListener("click", function(){
  //go through all layers and see if either name is in symbolLayers or group is in groupIds:
  if(mapStyle==="normal"){
    var layerList=layers.layers;
  }else if(mapStyle==="aerial"){
    var layerList=flyfoto.layers;
    for(var i=0; i<layerList.length; i++){ //remove the ones that are always default
      for(var j=0; j<defaultOffFlyfotoLayers.length; j++){
        if(layerList[i].id === defaultOffFlyfotoLayers[j]){
          layerList.splice(i, 1);
        }
      }
    }
  }

  for(var i=0; i<layerList.length; i++){
    var layer=layerList[i];
      toggleIfSymbol(layer);
  }
});

document.getElementById("otherLayers").addEventListener("click", function(){
  var layerList=layers.layers;
  for(var i=0; i<layerList.length; i++){
    var layer=layerList[i];
    toggleIfPartOfGroup(layer, annetGroupIDs);
  }
});


function toggleIfSymbol(layer, groupIDs){
  if(layer.type==="symbol"){ // if has a layer group, and type symbol
    if(map.getLayoutProperty(layer.id, 'visibility') ==="visible" ){ //visible
      //console.log("trying to hide visible layers");
      map.setLayoutProperty(layer.id, 'visibility', 'none');
      //console.log(layer.layout);
    }else if( map.getLayoutProperty(layer.id, 'visibility')==="none" ){ //not visible
      console.log("trying to show hidden layers");
      map.setLayoutProperty(layer.id, 'visibility', 'visible');
    }
  }
}

function toggleIfPartOfGroup(layer, groupIDs){
  if(layer.metadata && layer.ref==undefined){ // if has a layer group defined

    for(var j=0; j<groupIDs.length; j++){ //for all groupIDs
      if(layer.metadata["mapbox:group"] === groupIDs[j] ){ //correct group
        if(layer.type==="symbol"){
          //
        }
        if(map.getLayoutProperty(layer.id, 'visibility') ==="visible" ){ //visible
          map.setLayoutProperty(layer.id, 'visibility', 'none');
          //console.log("hide layer: "+layer.id);
        }else if( map.getLayoutProperty(layer.id, 'visibility')==="none" ){ //not visible
          // console.log("trying to show hidden layers: "+layer.id);
          // console.log("has visibility: "+map.getLayoutProperty(layer.id, 'visibility'));
          map.setLayoutProperty(layer.id, 'visibility', 'visible');
        }
      }
    }

  }
  toggleIfOtherLayer(layer, annetLayers); //layers to be hidden that is not in a group
}

function toggleIfOtherLayer(layer, layerList){
  if(layer.ref){ //if layer has ref, dont show or hide
    return;
  }
  for(var j=0; j<layerList.length; j++){
    if(layer.id===layerList[j]){
      console.log("layer in layerList");
      console.log(layer.id);
      if(map.getLayoutProperty(layer.id, 'visibility')==="visible"){
        map.setLayoutProperty(layer.id, 'visibility', 'none');
      }else if(map.getLayoutProperty(layer.id, 'visibility')==="none"){
        map.setLayoutProperty(layer.id, 'visibility', 'visible');
      }else{
        console.log("why");
      }
    }
  }
}
