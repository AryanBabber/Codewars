function sum(n, m = n) {
	if (n == 0) return 1;
	if (n < 0 || m == 0) return 0;
	if (memo[n] && memo[n][m]) return memo[n][m];
	let total = sum(n, m - 1) + sum(n - m, m);
	if (!memo[n]) {
		memo[n] = [];
	}
	memo[n][m] = total;
	return total;
}

let memo = [];
