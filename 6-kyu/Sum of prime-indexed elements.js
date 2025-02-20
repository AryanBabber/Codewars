function total(arr) {
	const prime = (n) => {
		if (n < 2) return false;

		for (let i = 2; i <= n / 2; i++) {
			if (n % i == 0) return false;
		}

		return true;
	};

	let total = 0;

	for (let i = 0; i < arr.length; i++) {
		if (prime(i)) total += arr[i];
	}

	return total;
}
