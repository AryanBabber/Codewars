function solve(arr) {
	return arr.map((a) => [...new Set(a)].length).reduce((a, b) => a * b);
}
