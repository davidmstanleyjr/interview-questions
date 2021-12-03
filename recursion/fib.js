// Write a function called fib which accepts a number and
// returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence
// of whole numbers 1, 1, 2, 3, 5, 8, ... which starts
// with 1 and 1, and where every number thereafter is equal to the
// sum of the previous 2 numbers.

//Pseudocode
// declare function called fib with n as a parameter.
// if statement. If n is less than or equal to 2, return 1.
// otherwise return fib(n-1) + fib(n-2)

function fib(n) {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
}

console.log(fib([9]));
