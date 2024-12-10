function rotate(str) {
	return Array.from(
		{ length: str.length },
		(v, i) => str.substring(i + 1) + str.substring(0, i + 1)
	);
}
