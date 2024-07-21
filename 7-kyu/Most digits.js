function findLongest(array) {
	let ans = array[0];

	for (let i = 1; i < array.length; i++) {
		if (String(array[i]).length > String(ans).length) {
			ans = array[i];
		}
	}

	return ans;
}
