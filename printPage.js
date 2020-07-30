function headerTop(tagline) {
	console.log("I'm the top of a website!" + tagline);
}

function headerBottom(tagline) {
	console.log("*** Bottom of a website ***" + tagline);
}

function printHeader(tagline2, tagline1) {
	headerTop(tagline1);
	headerBottom(tagline2);
}

//headerTop("I'm the input");
printHeader("I'm a tagline ", "2nd tagline! ");
