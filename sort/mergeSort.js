// Merge sort is a combination of 2 things, merging and sorting.
// It exploits the fact hat arrays of 0 or 1 element are always sorted.
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.
// Divide and conquer basically.

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
