//Given two non-empty arrays of integers, write a function that determines
//whether the second array is a subsequence of the first one.

function isValidSubsequence(array, sequence) {
	let seqIdx = 0;
	let arrIdx = 0;
	while (arrIdx < array.length && seqIdx < sequence.length) {
		if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
		arrIdx++;
	}
	return seqIdx === sequence.length;
}

isValidSubsequence(3, 5, 4, 8, 11, 1, -1, 6);
