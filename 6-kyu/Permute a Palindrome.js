function permuteAPalindrome(input) {
	let count = 0;
	const dict = input.split``.reduce(
		(a, b) => ((a[b] = a[b] ? a[b] + 1 : 1), a),
		{}
	);
	for (let i in dict) {
		if (dict[i] % 2 !== 0) {
			count++;
		}
		if (count === 2) return false;
	}
	return true;
}
