function binRota(arr) {
	return arr.map((a, i) => (i % 2 == 1 ? a.reverse() : a)).flat();
}
