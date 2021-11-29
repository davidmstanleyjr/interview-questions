// Write a function that accepts a sorted array and a value
// Create a left pointer at the start of the array,
// and a right pointer at the end of the array.
// While the left pointer comes before the right pointer:
// If you find the value you want, return the index
// If the value is too small, move the left pointer up.
// If the value is too large, move the right pointer down.
// If you never find the value, return -1.

function binarySearch(arr, val) {
	//left pointer
	var start = 0;
	// right pointer
	var end = arr.length - 1;
	//middle pointer.
	var middle = Math.floor((start + end) / 2);
	while (arr[middle] !== val && start <= end) {
		// if the value is less than the middle
		if (val < arr[middle]) {
			// the end now equals the middle minus 1
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	if (arr[middle] === val) {
		return middle;
	}
	return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13));
