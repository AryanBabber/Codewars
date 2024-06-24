function sumTriangularNumbers(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans += triangularNum(i);
	}

	return ans;
}

const triangularNum = (n) => {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans += i;
	}

	return ans;
};
