function exsistsInList(list, element){
  for (var i = 0; i < list.length; i++) {
    if(list[i]==element){
      return(true);
    }
  }
  return(false);
}

function removeElementInList(list, target){
  var index = list.indexOf(target);
  list.splice(index, 1);
}

function exsistsInObject(obj, name){
  if(obj[name]===undefined){
    return false;
  }else{
    return true;
  }
}

function removeElementInObj(obj, name){
  delete obj.name;
}

function getEl(type){
  return document.createElement(type);
}
