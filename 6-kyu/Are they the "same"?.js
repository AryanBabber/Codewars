function comp(array1, array2) {
	if (!array2 || !array1 || array1.length != array2.length) return false;

	array1 = array1.map((v) => v * v);
	array1.sort((a, b) => a - b);
	array2.sort((a, b) => a - b);

	return array1.every((v, i) => v === array2[i]);
}
