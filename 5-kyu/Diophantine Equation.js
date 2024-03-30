const solequa = (n) => {
	let ans = [];

	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i !== 0) continue;

		const j = n / i;
		const y = (j - i) / 4;
		const x = i + 2 * y;

		if (
			x >= 0 &&
			y >= 0 &&
			j === x + 2 * y &&
			i === x - 2 * y &&
			x % 1 == 0 &&
			y % 1 == 0
		) {
			ans.push([x, y]);
		}
	}

	return ans.sort((a, b) => b[0] - a[0]);
};
