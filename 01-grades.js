// Write a function that receives a grade a grade between 2.00 and 6.00 and prints the corresponding grade in words

function grades(grade) {
	if (grade >= 2.0 && grade <= 2.99) {
		console.log("Fail");
	} else if (grade >= 3.0 && grade <= 3.49) {
		console.log("Poor");
	} else if (grade >= 3.5 && grade <= 4.49) {
		console.log("Good");
	} else if (grade >= 4.5 && grade <= 5.49) {
		console.log("Very Good");
	} else {
		console.log("Excellent");
	}
	// TODO: Add other conditions }
}

grades(2.4);
grades(6.8);
