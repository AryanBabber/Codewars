function allNonConsecutive(arr) {
	let arr1 = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] - 1 !== arr[i]) arr1.push({ i: i + 1, n: arr[i + 1] });
	}
	return arr1;
}
