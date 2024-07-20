function minSum(arr) {
	arr = arr.sort((a, b) => a - b);
	let l = 0;
	let r = arr.length - 1;
	let sum = 0;
	while (l < r) {
		sum += arr[l++] * arr[r--];
	}

	return sum;
}
