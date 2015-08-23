//Range function that accepts two parameters: start, end
//Will create an array of range from start to end.
var range = function(start, end){
	if(typeof start === 'number' && typeof end === 'number'){
		var product = [];
        for(var i = start; i <= end; i++){
          product.push(i);
		}
        return product;
	}else{
		return "Sorry, please provide two numbers."
	}
}
//Sum funciton that accepts an array as arr
//Will iterate through array and sum numerical elements and
//return that total.
var sum = function(arr){
    if(Array.isArray(arr)){
      var total = 0;
      arr.forEach(function(el){
        if(typeof el === 'number'){
          total += el;
        }
      });
      return total;
    } else{
      return "Sorry, please provide an array."
    }
}

//Invoke the range function with 1 and 10 and assign to myRange
var myRange = range(1,10);

//Invoke the sum function with myRange and assign return value //to mySum
var mySum = sum(myRange);

//Console log out the answer stored in mySum.
console.log(mySum);

