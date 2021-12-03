// Write a program that prints the numbers from 1 to 20.
// For multiples of 3 print "Fizz" instead of the number.
// For Multiples of 5 print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5 print "FizzBuzz".
// For number not divisible by 3, or 5, or both, print the number as is.

// Pseudocode
// FOR LOOP:
// Set Counter to 1
// Break when counter reaches 20
// Increment counter by 1
for (let i = 1; i <= 20; i++) {
	if (i % 15 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
// IF number MOD 15 === 0
// print "FizzBuzz"
// ELSE IF number MOD 3 === 0
// print "Fizz"
// ELSE IF number MOD 5 === 0
// print "Buzz"
// ELSE
// print number
