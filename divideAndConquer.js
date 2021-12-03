// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index
// where the value passed to the function is located.
// if the value is not found, return -1.

//function called search. Accepts the array and the value.
function search(array, val) {
	// min value starts at an index of 0. The max is array.length - 1 so it can go left and/or right.
	let min = 0;
	let max = array.length - 1;

	// if the minimum is less than or equal to the max
	while (min <= max) {
		// the middle number is found
		let middle = Math.floor((min + max) / 2);
		let currentElement = array[middle];

		//if the middle number of the array is less than the value, the minimum is now the middle number + 1.
		if (array[middle] < val) {
			min = middle + 1;
			// otherwise if the middle number is greater than the current value, the max is now the middle number - 1.
		} else if (array[middle] > val) {
			max = middle - 1;
			// otherwise return the middle number
		} else {
			return middle;
		}
	}
	// if the value is not found, return -1.
	return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 2));
