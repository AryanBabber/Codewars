function sumOrProduct(array, n) {
	array = array.sort((a, b) => a - b);

	let sums = array.slice(array.length - n).reduce((a, b) => a + b, 0);
	let prods = array.slice(0, n).reduce((a, b) => a * b, 1);

	return sums > prods ? "sum" : prods > sums ? "product" : "same";
}
