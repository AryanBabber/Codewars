function multipleOfIndex(array) {
	return array.filter((v, i) => array[i] == 0 || v % i === 0);
}
