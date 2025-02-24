function squareOrSquareRoot(array) {
	return array.map((v) => (v ** 0.5 % 1 === 0 ? v ** 0.5 : v ** 2));
}
