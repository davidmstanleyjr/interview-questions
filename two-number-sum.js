// function twoNumberSum(array, targetSum) {
//     let hash = {};

//     for (let i = 0; i < array.length; i++) {
//         let current = array[i];
//         let different = targetSum - current;

//         if (hash.hasOwnProperty(different)) {
//             return [current, different]. sort((a, b) => a -b);
//         } else {
//             hash[current] = true;
//         }
//     }

//     return [];
// }

// twoNumberSum([4, 6], 10);
// twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

function twoNumberSum(array, targetSum) {
	for (let i = 0; i < array.length; i++) {
		const firstNum = array[i];

		for (let j = i + 1; j < array.length; j++) {
			const secondNum = array[j];
			if (firstNum + secondNum === targetSum) {
				return [firstNum, secondNum];
			}
		}
	}
	return [];
}

array = [3, 5, 4, 8, 11, 1, -1, 6];
targetSum = 10;

console.log(twoNumberSum(array, targetSum));
