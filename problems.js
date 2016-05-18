function contains(arr, str, cb) {
	for (var i = 0; i < arr.length; ++) {
		if (arr[i] === str) {
			return cb(true);
		}
	}
	return cb(false);
}






function uniq(arr, cb) {
	var sortedArray = arr.slice().sort(),
	results = [];
	newArr = [];

	for (var i = 0; i < arr.length - 1; i++) {
		if (sortedArray)
	}
}




function each(arr, cb) {
	for (var i = 0; i < arr.length; i++) {
		cb(i, arr[i])
	}
}





function getUserById(arr, value, cb) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].id === value) {
			cb(arr[i])
		}
	}
}




