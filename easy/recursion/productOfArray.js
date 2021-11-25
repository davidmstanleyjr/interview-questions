// Write a function called productOfArray which takes in an array of number and returns the product of them all.

//Pseudocode

// declare the name of the function and pass arr
//if statement that says if the length of the array equals 0, return
// then return array at index 0 * productOfArray(arr.slice(1));

function productOfArray(arr) {
	if (arr.length === 0) {
		return 1;
	}
	return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([4, 5, 9, 13]));
