function twoNumberSum(array, targetSum) {
    let hash = {};

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let different = targetSum - current;

        if (hash.hasOwnProperty(different)) {
            return [current, different]. sort((a, b) => a -b);
        } else {
            hash[current] = true;
        }
    }

    return [];
}

twoNumberSum([4, 6], 10);
twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);