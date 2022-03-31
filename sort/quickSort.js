// Like Merge Sort, QuickSort is a Divide and Conquer algorithm.
// It picks an element as pivot and partitions the given array around the picked pivot.
//There are many different versions of quickSort that pick pivot in different ways.

// Always pick first element as pivot.
// Always pick last element as pivot (implemented below)
// Pick a random element as pivot.
// Pick median as pivot.
// The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

//it's useful to implement a function that's responsible for arranging elements in an array on either side of a pivot.
//Given an array, this helper function should designate an element as the pivot
//It should rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
// the order of elements on either side of the pivot doesn't matter!
//The helper should do this in place, it shouldn't create a new array.

function pivot(arr, start = 0, end = arr.length - 1) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};

	// We are assuming the pivot is always the first element
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}

	// Swap the pivot from the start the swapPoint
	swap(arr, start, swapIdx);
	return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right); //3
		//left
		quickSort(arr, left, pivotIndex - 1);
		//right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

console.log(quickSort([(100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23)]));

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
