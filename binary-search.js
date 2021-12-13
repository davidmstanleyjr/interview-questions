function binarySearch(array, target) {
	return bsHelper(array, target, 0, array.length - 1);
}

function bsHelper(array, target, left, right) {
	if (left > right) return -1;
	const middle = Math.floor((left + right) / 2);
	const potentialMatch = array[middle];
	if (target === potentialMatch) {
		return middle;
	} else if (target < potentialMatch) {
		return bsHelper(array, target, left, middle - 1);
	} else {
		return bsHelper(array, target, middle + 1, right);
	}
}

array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
target = 33;

console.log(binarySearch(array, target));
