main(23, 6, 10);
function main(input1, input2, input3) {
	let output = addAndSub(input1, input2, input3);
	console.log(output);
}

function addAndSub(num1, num2, num3) {
	// function sum(sumN1,sumN2){
	//     return sumN1+sumN2;
	// }
	let sum = (sumN1, sumN2) => sumN1 + sumN2;

	function sub(subN1, subN2) {
		return subN1 - subN2;
	}

	let sumres = sum(num1, num2);
	let result = sub(sumres, num3);
	return result;
	//return sub(sum(num1,num2),num3);
}
