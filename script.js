isFive();
function isFive() {
	console.log("5");
}
//isSix();
let isSix = function () {
	console.log("6");
};
isSix();

function noArgs() {
	console.log("I'm a function with no arguments");
}

noArgs();

function addNums(num1, num2) {
	console.log(num1 + num2);
}

addNums(21, 21);

var subNums = function (num1, num2) {
	console.log(num1 - num2);
};

subNums(100, 25);

function printStars(count) {
	console.log("*".repeat(count));
}
printStars(5);
