// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

// Pseudocode

// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
	const swap = (arr, idx1, idx2) =>
		([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			console.log(i, j);
			if (arr[lowest] > arr[j]) {
				lowest = j;
				console.log(arr);
			}
		}
		if (i !== lowest) swap(arr, i, lowest);
	}
	return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
