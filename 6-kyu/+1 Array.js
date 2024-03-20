function upArray(arr) {
	if (arr.length === 0) return null;
	let carry = 1;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] > 9 || arr[i] < 0) return null;
		if (carry > 0) {
			arr[i] += carry;
			carry = Math.floor(arr[i] / 10);
			arr[i] = arr[i] % 10;
		}
	}
	if (carry > 0) arr.unshift(carry);
	return arr;
}
