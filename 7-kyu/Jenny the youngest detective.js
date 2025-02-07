function missingWord(nums, str) {
	return nums
		.sort((a, b) => a - b)
		.map((v) => str.split(" ").join("")[v])
		.join("")
		.toLowerCase().length < 3
		? "No mission today"
		: nums
				.sort((a, b) => a - b)
				.map((v) => str.split(" ").join("")[v])
				.join("")
				.toLowerCase();
}
