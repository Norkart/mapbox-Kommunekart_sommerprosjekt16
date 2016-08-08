var common={};

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

common.removeFromList=function(element, list){
  var index;
  for(var i=0; i<list.length; i++){
    if(list[i]===element){
      index=i;
    }
  }
  return list.splice(index,1);
}

common.formatName=function(name){
  var formattedName=name.toLowerCase();
  //first char uppercase
  formattedName=formattedName.replace(formattedName.charAt(0),formattedName.charAt(0).toUpperCase());
  formattedName=formattedName.split("_").join(" ");
  return formattedName;
}


// Limitations for each function in functions:
//  - only send max 1 parameter in the success or failure callback
//  - multiple failure/success calls is not handled
//  - the first input parameters should be the be success callback, and the second should be the failure callback
// An array with the responses from each function will be called in both the success and failure callback
common.handleMultipleAsyncCalls = function (functions, success, failure) {
    var results = [];
    var counter = 0;
    var failureCounter = 0;
    var numberOfFunctions = functions.length;

    var successWrapper = function (data, index) {
        wrapper(data, index);
    };

    var failureWrapper = function (data, index) {
        failureCounter++;
        wrapper(data, index);
    };

    var wrapper = function (data, index) {
        results[index] = data;
        counter++;
        finishIfDone();
    }

    var finishIfDone = function () {
      console.log(counter);
      console.log(numberOfFunctions);
        if (counter === numberOfFunctions) {
            if (failureCounter > 0) {
                failure(results);
            } else {
                success(results);
            }
        }
    }

    functions.forEach(function (currentFunction, index) {
        var success = (function (index) { return function (data) { successWrapper(data, index) } })(index);
        var failure = (function (index) { return function (data) { failureWrapper(data, index) } })(index);

        currentFunction(success, failure);
    });

}
