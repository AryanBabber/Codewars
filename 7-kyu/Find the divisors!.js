function divisors(integer) {
	if (integer < 2) return `${integer} is prime`;
	let arr = [];

	for (let i = 2; i < integer; i++) {
		if (integer % i == 0) arr.push(i);
	}

	return arr.length ? arr : `${integer} is prime`;
}
