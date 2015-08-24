function arrayToList(arr){
  var list;
  for(var i = arr.length -1; i >= 0; i--){
    list = prepend(arr[i], list)
  }
  return list;
}

function listToArray(list){
  var arr = [];
  var searching = true;
  while(searching){
    arr.push(list.value);
    if(list.rest){
      list = list.rest;
    } else{
      searching = false;
    }
  }
  return arr;
}

function prepend(el, list){
  var newList = {
    value: el,
    rest: null
  };

  if(typeof list === 'object'){
    newList.rest = list
  }

  return newList;
}

function nth(list, nmbr){
  var el;
  for(var i = 1; i <= nmbr; i++){
    if(list){
      el = list.value;
      list = list.rest;
    } else{
      return undefined
    }
  }
  return el;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20
