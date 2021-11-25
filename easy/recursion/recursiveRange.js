// Write a function called recursiveRange which accepts a number and
// adds up all the numbers from 0 to the number passed to the function.

//Pseudocode

// declare a function called recursiveRange. Pass i as a parameter
// if statement. If i equals 0, return 0.
// otherwise, return i + recursiveRange(i-1).

function recursiveRange(i) {
	if (i === 0) return 0;
	return i + recursiveRange(i - 1);
}

console.log(recursiveRange([9]));
