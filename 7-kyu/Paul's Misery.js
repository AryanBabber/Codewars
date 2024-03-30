function paul(x) {
	let vals = {
		kata: 5,
		"Petes kata": 10,
		life: 0,
		eating: 1,
	};

	let score = x.map((v) => vals[v]).reduce((a, b) => a + b, 0);

	return score >= 100
		? "Miserable!"
		: score >= 70
		? "Sad!"
		: score >= 40
		? "Happy!"
		: "Super happy!";
}

console.log(paul(["life", "Petes kata", "Petes kata", "Petes kata", "eating"]));
console.log(
	paul([
		"eating",
		"eating",
		"life",
		"Petes kata",
		"eating",
		"life",
		"Petes kata",
		"life",
		"Petes kata",
		"Petes kata",
		"kata",
		"life",
		"eating",
		"Petes kata",
		"Petes kata",
		"eating",
		"life",
		"kata",
		"life",
		"Petes kata",
		"eating",
		"eating",
		"life",
		"eating",
		"Petes kata",
		"eating",
		"life",
		"eating",
		"life",
	])
);
