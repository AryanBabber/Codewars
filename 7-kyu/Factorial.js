function factorial(n) {
	// Calculate the factorial here
	if (n < 0 || n > 12) {
		throw new RangeError("Number must be between 0 and 12");
	}

	if (n <= 1) return 1;

	return n * factorial(n - 1);
}
