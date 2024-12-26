function solve(arr) {
	let ans = [];
	while (arr.length) {
		let max = Math.max(...arr);
		let min = Math.min(...arr);

		if (max != min) {
			ans.push(max);
			ans.push(min);
		} else ans.push(max);
		arr.splice(arr.indexOf(max), 1);
		arr.splice(arr.indexOf(min), 1);
	}

	return ans;
}
