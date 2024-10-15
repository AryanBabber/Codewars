function evenOrOdd(str) {
	let oddVals = str
		.split("")
		.filter((v) => v % 2 == 1)
		.reduce((a, b) => a + +b, 0);
	let evenVals = str
		.split("")
		.filter((v) => v % 2 == 0)
		.reduce((a, b) => a + +b, 0);

	return oddVals > evenVals
		? "Odd is greater than Even"
		: oddVals < evenVals
		? "Even is greater than Odd"
		: "Even and Odd are the same";
}
