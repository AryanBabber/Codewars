function pairs(ar) {
	const arr1 = [];
	for (let i = 0; i < ar.length; i += 2) {
		if (ar[i] + 1 === ar[i + 1] || ar[i] === ar[i + 1] + 1) {
			arr1.push([ar[i], ar[i + 1]]);
		}
	}
	return arr1.length;
}
