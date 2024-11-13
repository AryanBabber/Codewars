function minimumSteps(numbers, value) {
	numbers = numbers.sort((a, b) => a - b);
	for (let i = 1; i <= numbers.length; i++) {
		if (numbers.slice(0, i).reduce((a, b) => a + b, 0) >= value)
			return i - 1;
	}
}
