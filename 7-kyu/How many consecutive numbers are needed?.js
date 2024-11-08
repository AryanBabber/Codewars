function consecutive(array) {
	return !array.length
		? 0
		: Math.max(...array) - Math.min(...array) + 1 - array.length;
}
