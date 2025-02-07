function isTriangular(t) {
	let init = 1;
	let arr = [];
	while (t >= 0) {
		arr.push(t);
		t -= init++;
	}

	return arr[arr.length - 1] === 0;
}
