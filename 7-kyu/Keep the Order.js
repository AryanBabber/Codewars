function keepOrder(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (val <= arr[i]) {
			return i;
		}
	}
	return arr.length;
}
