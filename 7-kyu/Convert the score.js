function scoreboard(string) {
	let obj = {
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
		nil: 0,
	};

	return string
		.split(" ")
		.map((v) => obj[v])
		.filter((v) => v != undefined);
}
