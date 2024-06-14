function rowWeights(array) {
	let n1 = 0;
	let n2 = 0;

	for (let i = 0; i < array.length; i++) {
		if (i % 2 === 0) n1 += array[i];
		else n2 += array[i];
	}

	return [n1, n2];
}
