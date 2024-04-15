function powersOfTwo(n) {
	return Array.from({ length: n + 1 }, (_, i) => Math.pow(2, i));
}

