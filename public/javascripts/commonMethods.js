function exsistsInList(list, element){
  if(list == undefined){
    return(false);
  }
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
  if(obj == undefined){
    return false;
  }
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

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}
