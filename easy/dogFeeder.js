//Takes weight in pounds and age in years and returns the
//number of pounds of raw food to feed in a day.

//feeding requirements

//adult dogs

//adult dogs at least 1 year
//up to 5 pounds - 5% of their body weight
// 6-10 pounds - 4% of their body weight
// 11 - 15 pounds - 3% of their body weight
// > 15 pounds - 2% of their body weight

// puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// name the function dogFeeder

function dogFeeder(weight, age) {
	let rawFood = 0;
	if (age >= 1) {
		//adult dog
		if (weight <= 5) {
			rawFood = weight * 0.05;
			return rawFood;
		} else if (weight > 5 && weight <= 10) {
			rawFood = weight * 0.04;
			return rawFood;
		}
	} else {
		//puppy
		console.log("puppy");
	}
}

console.log(dogFeeder(7, 2));
