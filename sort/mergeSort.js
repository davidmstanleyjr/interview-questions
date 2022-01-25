// Merge sort is a combination of 2 things, merging and sorting.
// It exploits the fact hat arrays of 0 or 1 element are always sorted.
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.
// Divide and conquer basically.

//In order to implement merge sort, it's useful to first implement
// a function responsible for merging two sorted arrays.
//Given two arrays which are sorted, and consists of all of
// the elements in the two input arrays.
//This function should run n 0(n + m) time and O(n + m) space and
//should ot modify the parameters passed to it.

// Pseudocode
//Create an empty array, take a look at the smallest values in each input array.
// While there are still values we havent looked at, if the value in the first array is smaller
//then the value in the second array, push the value in the first array
//into our results and move on to the next value in the first array.
// If the value in the first array is larger than that of of the second array,
//push the value in the second array into the results and move on to the next value in the second array.
// Once you exhaust one array, push in all remaining values from the other array.

function merge(arr1, arr2) {
	let results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}

console.log(merge([100, 200], [1, 2, 3, 5, 6]));
