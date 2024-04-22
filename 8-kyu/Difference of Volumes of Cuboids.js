const findDifference = (x, y) =>
	Math.abs(x.reduce((a, b) => a * b) - y.reduce((a, b) => a * b));
