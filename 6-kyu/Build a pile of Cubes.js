function findNb(m) {
	let i = 1;
	let count = 0;
	while (m > 0) {
		m -= Math.pow(i, 3);
		i++;
		count++;
	}

	return m === 0 ? count : -1;
}
