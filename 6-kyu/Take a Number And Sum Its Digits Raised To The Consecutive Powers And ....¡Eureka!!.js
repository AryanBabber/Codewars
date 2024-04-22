function sumDigPow(a, b) {
	let arr = [];
	while (a <= b) {
		if (isDigPow(a)) arr.push(a);
		a++;
	}

	return arr;
}

function isDigPow(n) {
	return (
		String(n)
			.split("")
			.map((v, i) => (+v) ** (i + 1))
			.reduce((a, b) => a + b, 0) === n
	);
}
