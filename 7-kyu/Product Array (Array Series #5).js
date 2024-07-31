function productArray(numbers) {
	let ans = [];

	for (let i = 0; i < numbers.length; i++) {
		ans.push(numbers.reduce((a, b) => a * b) / numbers[i]);
	}

	return ans;
}
