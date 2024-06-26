function squareArea(A) {
	return (
		Math.round(Number(Math.pow((2 * A) / 3.1416, 2).toFixed(3)) * 100) / 100
	);
}
