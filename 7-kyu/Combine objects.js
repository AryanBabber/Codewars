function combine() {
	let ans = {};

	for (let i = 0; i < arguments.length; i++) {
		for (let key in arguments[i]) {
			if (!ans[key]) {
				ans[key] = arguments[i][key];
			} else {
				ans[key] += arguments[i][key];
			}
		}
	}

	return ans;
}
