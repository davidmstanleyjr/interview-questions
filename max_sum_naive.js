// Write a function called maxSubArraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of
// n consecutive elements in the array.

function maxSubarraySum(arr, num) {
	//if the number is greater than the length of the array, return null
	if (num > arr.length) {
		return null;
	}
	// otherwise max starts at negative infinity because if there is an array of all negative numbers the biggest sum would still be negative.
	var max = -Infinity;
	// loop starts at 0, goes almost to the end of the array
	for (let i = 0; i < arr.length - num + 1; i++) {
		// then i make a variable called temp that stores the sum each time through the loop
		temp = 0;
		// second loop goes through and adds array of i + j.
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		// if temp is greater than max, update temp
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
