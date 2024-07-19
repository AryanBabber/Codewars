function boredom(staff) {
	let scores = {
		accounts: 1,
		finance: 2,
		canteen: 10,
		regulation: 3,
		trading: 6,
		change: 6,
		IS: 8,
		retail: 5,
		cleaning: 4,
		"pissing about": 25,
	};

	let finalScore = Object.values(staff).reduce((a, b) => a + scores[b], 0);
	return finalScore <= 80
		? "kill me now"
		: finalScore < 100
		? "i can handle this"
		: "party time!!";
}
