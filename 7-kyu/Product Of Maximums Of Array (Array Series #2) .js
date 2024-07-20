function maxProduct(numbers, size) {
	numbers = numbers.sort((a, b) => b - a);
	return numbers.slice(0, size).reduce((a, b) => a * b);
}
