function arrayToList(arr){
  var list;
  for(var i = arr.length -1; i >= 0; i--){
    list = prepend(arr[i], list)
  }
  return list;
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

function nth(){
  //takes a list and a number and returns the element at the given position in the list, or undefined if it doesn't exist
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
