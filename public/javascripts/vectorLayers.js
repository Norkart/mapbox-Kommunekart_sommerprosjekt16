//Turn on/off layers based on groups in json


var symbolGroupIDs=[];
//get name of groups that makes out all symbols:
var layerGroups=layers.metadata["mapbox:groups"];
console.log(layerGroups);
for(var group in layerGroups){
  for(var i=0; i<symbolGroups.length; i++){
    if(layerGroups[group].name === symbolGroups[i]){
      symbolGroupIDs.push(group);
    }
  }
}

//Symbols listener:
document.getElementById("symbolLayers").addEventListener("click", function(){
  //go through all layers and see if either name is in symbolLayers or group is in groupIds:
  var layerList=layers.layers;
  for(var i=0; i<layerList.length; i++){
    var layer=layerList[i];
    toggleIfSymbol(layer, symbolGroupIDs);
  }
});

var notKnownGroups=[];

function toggleIfSymbol(layer, groupIDs){
  if(layer.type==="symbol"){ // if has a layer group, and type symbol
    if( map.getLayoutProperty(layer.id, 'visibility') ==="visible" ){ //visible
      if(print){
        console.log("hiding osm");
      }
      //console.log("trying to hide visible layers");
      map.setLayoutProperty(layer.id, 'visibility', 'none');
      if(print){
        console.log( map.getLayoutProperty(layer.id, 'visibility') );
      }
      //console.log(layer.layout);
    }else if( map.getLayoutProperty(layer.id, 'visibility')==="none" ){ //not visible
      console.log("trying to show hidden layers");
      map.setLayoutProperty(layer.id, 'visibility', 'visible');
    }
  }
}

function toggleIfPartOfGroupOld(layer, groupIDs){
  if(layer.metadata && layer.type==="symbol"){ // if has a layer group, and type symbol
    for(var j=0; j<groupIDs.length; j++){ //check if correct group
      if(groupIDs[j]==="1463634697483.6973"){ //TEST
        var print=true;
      }
      if(layer.metadata["mapbox:group"] === groupIDs[j] ){ //correct group
        if(print){console.log("found group");}
        if( map.getLayoutProperty(layer.id, 'visibility') ==="visible" ){ //visible
          if(print){
            console.log("hiding osm");
          }
          //console.log("trying to hide visible layers");
          map.setLayoutProperty(layer.id, 'visibility', 'none');
          if(print){
            console.log( map.getLayoutProperty(layer.id, 'visibility') );
          }
          //console.log(layer.layout);
        }else if( map.getLayoutProperty(layer.id, 'visibility')==="none" ){ //not visible
          console.log("trying to show hidden layers");
          map.setLayoutProperty(layer.id, 'visibility', 'visible');
        }
      }else{
        notKnownGroups.push(layer.id);
      }
    }
  }else{
    toggleIfOtherSymbolLayer(layer);
  }
  console.log(notKnownGroups);
}

function toggleIfOtherSymbolLayer(layer){
  for(var j=0; j<symbolLayers.length; j++){
    //console.log(layer.id);
    if(layer.id===symbolLayers[j]){
      console.log("layer in symbolLayers");
      if(map.getLayoutProperty(layer.id, 'visibility')==="visible"  && layer.type==="symbol"){
        map.setLayoutProperty(layer.id, 'visibility', 'none');
      }else if(layer.type==="symbol"){
        map.setLayoutProperty(layer.id, 'visibility', 'visible');
      }
    }
  }
}
