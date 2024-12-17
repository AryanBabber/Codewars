function oddOnesOut(nums) {
	const obj = {};
	nums.forEach((v) => (obj[v] = obj[v] ? (obj[v] += 1) : 1));

	return nums.filter((v) => obj[v] % 2 === 0);
}
