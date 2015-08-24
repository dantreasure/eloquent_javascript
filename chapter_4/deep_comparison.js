function deepEqual(obj1, obj2){
	for(var prop in obj1){
		if(typeof obj1[prop] === 'object' && typeof obj2[prop] ==='object'){
			deepEqual(obj1[prop], obj2[prop]);
		} else{
			if(obj1[prop] !== obj2[prop]){
				return false;
			}
		}
	}
	return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
