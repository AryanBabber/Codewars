function moveZeros(arr) {
	let array = [],
		zeroes = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			zeroes.push(arr[i]);
		} else {
			array.push(arr[i]);
		}
	}
	return [...array, ...zeroes];
}
