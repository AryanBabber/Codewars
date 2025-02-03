function maxProduct(a) {
	let max = a[0];
	let second = a[1];

	for (let i = 0; i < a.length; i++) {
		if (a[i] > max) {
			second = max;
			max = a[i];
		} else if (a[i] > second) {
			second = a[i];
		}
	}

	return max * second;
}
