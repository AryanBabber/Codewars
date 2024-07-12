function isPythagoreanTriple(integers) {
	let [a, b, c] = integers.sort((a, b) => a - b);
	return c * c === a * a + b * b;
}
