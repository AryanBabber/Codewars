function listSquared(m, n) {
	let ans = [];
	for (let i = m; i <= n; i++) {
		let sum = getDivisors(i).reduce((a, b) => a + b * b, 0);
		let a = Number.isInteger(Math.sqrt(sum));

		if (a) ans.push([i, sum]);
	}
	return ans;
}

const getDivisors = (n) => {
	let d = [];
	for (let i = 1; i <= n / 2; ++i) {
		if (n % i) continue;
		d.push(i);
	}
	return d.concat([n]);
};
