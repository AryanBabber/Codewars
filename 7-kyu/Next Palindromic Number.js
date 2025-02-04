function nextPal(val) {
	val = val + 1;
	while (!isPalindrome(val)) val++;

	return val;
}

const isPalindrome = (n) => n === +String(n).split("").reverse().join("");
