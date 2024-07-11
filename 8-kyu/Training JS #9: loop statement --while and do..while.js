function padIt(str, n) {
	let ans = "";
	let i = 0;
	while (i < Math.ceil(n / 2)) {
		ans += "*";
		i++;
	}

	ans += str;

	while (i < n) {
		ans += "*";
		i++;
	}

	return ans;
}
