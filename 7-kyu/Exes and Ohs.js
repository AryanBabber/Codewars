function XO(str) {
	str = str.split("");
	let x = str.filter((c) => c.toLowerCase() == "x").length;
	let o = str.filter((c) => c.toLowerCase() == "o").length;
	return x == o;
}
