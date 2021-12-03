// Loop through with a variable called i at the end of the array towards the beginning.
// Start an inner loop with a variable called j from the beginning until i - 1.
// if arr[j] is greater than arr[j+1], swap those two values.
//return the sorted array

function bubbleSort(arr) {
	for (var i = arr.length; i > 0; i--) {
		for (var j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j + 1]);
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
