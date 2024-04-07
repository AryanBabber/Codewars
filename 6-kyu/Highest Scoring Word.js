function high(x) {
	let res = x
		.split(" ")
		.map((v) => [...v].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
	return x.split(" ")[res.indexOf(Math.max(...res))];
}