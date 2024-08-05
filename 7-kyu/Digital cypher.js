function encode(str, n) {
	let strSum = String(n)
		.repeat(str.length)
		.split("")
		.slice(0, str.length)
		.map(Number);

	return str.split("").map((c, i) => c.charCodeAt(0) - 96 + strSum[i]);
}
