function highestRank(arr) {
	let obj = {};
	arr.map((v) => (obj[v] = obj[v] ? obj[v] + 1 : 1));
	let ans = 0;
	let ans1 = 0;
	for (let num in obj) {
		num = num * 1;
		if (obj[num] >= ans) {
			ans = obj[num];
			ans1 = num;
		}
	}

	return ans1;
}
