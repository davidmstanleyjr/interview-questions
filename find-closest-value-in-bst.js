function findClosestValueInBst(tree, target) {
	return bstHelper(tree, target, tree.value);
}

function bstHelper(tree, target, closest) {
	if (tree === null) return closest;
	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}
	if (target < tree.value) {
		return bstHelper(tree.left, target, closest);
	} else if (target < tree.value) {
		return bstHelper(tree.right, target, closest);
	} else {
		return closest;
	}
}

class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

console.log(findClosestValueInBst);
