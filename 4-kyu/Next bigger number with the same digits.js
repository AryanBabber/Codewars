function nextBigger(n) {
	const digits = String(n).split("");

	// Find the pivot
	let pivot = -1;
	for (let i = digits.length - 2; i >= 0; i--) {
		if (digits[i] < digits[i + 1]) {
			pivot = i;
			break;
		}
	}

	// If no pivot found (all digits in descending order), return -1
	if (pivot === -1) return -1;

	// Find the rightmost digit greater than the pivot
	let swapDigit = pivot + 1;
	for (let i = pivot + 2; i < digits.length; i++) {
		if (digits[i] > digits[pivot] && digits[i] < digits[swapDigit]) {
			swapDigit = i;
		}
	}

	// Swap the pivot and swapDigit
	[digits[pivot], digits[swapDigit]] = [digits[swapDigit], digits[pivot]];

	// Sort digits after the pivot (originally in descending order)
	digits.splice(pivot + 1, digits.length - pivot - 1).sort();

	return parseInt(digits.join(""));
}
