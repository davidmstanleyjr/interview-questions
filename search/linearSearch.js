// Write a function called linearSearch which accepts
// an array and a value and returns the index at which
// the value exists. If the value does not exist in the
// array, return -1.

//Pseudocode

// This function accepts an array and a value
// Loop through the array and check if the current array element is equal to the value.
// If it is, return the index at which the element is found.
// If the value is never found, return -1.

function linearSearch(arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}
	return -1;
}

console.log(linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 687));
