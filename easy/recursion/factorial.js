//Write a function which accepts a number and returns the factorial of that number.
//Factorial is the product of an integer and all the integers below it; e.g., factorial four is equal to 24,
// because 4 * 2 * 1 equals 24. Factorial zero (0!) is always 1.

function factorial(x) {
	if (x < 0) return 0;
	if (x <= 1) return 1;
	return x * factorial(x - 1);
}

console.log(factorial(3));
