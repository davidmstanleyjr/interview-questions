function chopper(arr, excess) {
	arr.splice(0, excess);
	return arr;
}

console.log(
	chopper(
		[
			"JLKJLK",
			"Fkslfsl",
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
		2
	)
);
