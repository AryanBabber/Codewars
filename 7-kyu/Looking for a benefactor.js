function newAvg(arr, newavg) {
	const x = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0);
	if (x <= 0) throw "Expected New Average is too low";
	return Math.ceil(x);
}
