function easyLine(n) {
	for (let i = 1, sum = 1; i <= n; i++) sum *= (n + i) / i;
	return Math.round(Math.log(sum));
}
