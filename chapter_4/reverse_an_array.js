//reverseArray function accepts an array as a parameter and will iterate through elements from last to first, pushing each one to a new array, newArr. newArr will be a reverse of the initial array. Return newArr
function reverseArray(arr){
	if(Array.isArray(arr)){
		var newArr = [];
		for(var i=arr.length -1;i >= 0; i--){
			newArr.push(arr[i]);
		}
        return newArr;
	}else {
		return "The argument you provided is not an array."
	}
}

function reverseArrayInPlace(arr){
  if(Array.isArray(arr)){
    //Take the last element w/ pop() and place at index i,
    //Iterate through each element in array.
    for(var i=0;i < arr.length -1; i++){
      arr.splice(i,0,(arr.pop()))
    }
    return arr;
  }else{
    return "The argument you provided is not an array."
  }
}

console.log(reverseArray([1,2,3]));

console.log(reverseArrayInPlace([1,2,3,4,5,6,7]));
