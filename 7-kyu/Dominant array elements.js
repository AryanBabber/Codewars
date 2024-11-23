function solve(arr) {
	const arr1 = [];
	for (let i = 0; i < arr.length - 1; i++) {
		let n = arr[i];
		let arr2 = arr.slice(i + 1);
		let arr3 = arr2.map((v) => n > v);
		if (arr3.every((v) => v === true)) {
			arr1.push(n);
		}
	}
	arr1.push(arr[arr.length - 1]);
	return arr1;
}
