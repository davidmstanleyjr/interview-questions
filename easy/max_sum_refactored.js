function maxSubarraySum(arr, num) {
	// establish variables
	let maxSum = 0;
	let tempSum = 0;
	// if the length of the array is less than the number, return null
	if (arr.length < num) return null;
	// loop through the array and if I is less than the number, increment.
	for (let i = 0; i < num; i++) {
		// otherwise add maxSum to the array.
		maxSum += arr[i];
	}
	// update tempSum to maxSum
	tempSum = maxSum;
	// loop through. i equals the number, if i is less than the length of the array, increment.
	for (let i = num; i < arr.length; i++) {
		// otherwise update tempSum
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
