function Xbonacci(s, n) {
	if (s.length > n) return s.slice(0, n);
	let sum = [...s];
	for (let i = 0; sum.length < n; i++) {
		sum.push(sum.slice(i, sum.length).reduce((a, b) => a + b, 0));
	}
	return sum;
}
