function addAndSubtract(n1, n2, n3) {
	let theSum = function sum(n1, n2) {
		return n1 + n2;
	};

	function subtract(n3) {
		return theSum(n1, n2) - n3;
	}

	return console.log(subtract(n3));
}

addAndSubtract(23, 6, 10);
