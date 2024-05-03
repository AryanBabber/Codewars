function revrot(str, sz) {
	if (sz <= 0 || str === "" || sz > str.length) {
		return "";
	}

	let arr1 = str.split("").map((item) => parseInt(item));
	let arr2 = [];
	let sumUp = function add(a, b) {
		return a + b;
	};

	while (arr1.length >= sz) {
		arr2.push(arr1.splice(0, sz));
	}
	for (i = 0; i < arr2.length; i++) {
		if (arr2[i].reduce(sumUp) % 2 === 0) {
			arr2[i].reverse();
		} else {
			let goLeft = arr2[i].shift();
			arr2[i].push(goLeft);
		}
	}
	return arr2.map((item) => item.join("")).join("");
}
