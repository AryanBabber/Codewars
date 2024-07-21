function incrementer(nums) {
	return nums.map((v, i) => (v + i + 1) % 10);
}
