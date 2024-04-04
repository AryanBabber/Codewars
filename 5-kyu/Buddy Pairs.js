function buddy(start, limit) {
	function sum(n) {
		let sum = 0;
		for (let i = 1; i <= Math.sqrt(n); i++) {
			if (n % i === 0) {
				sum += i;
				if (n / i !== i && n / i !== n) {
					sum += n / i;
				}
			}
		}
		return sum;
	}
	for (let i = start; i <= limit; i++) {
		let n = sum(i) - 1;
		if (n > i && sum(n) - 1 === i) {
			return [i, n];
		}
	}
	return "Nothing";
}
