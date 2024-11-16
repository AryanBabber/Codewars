function doubleEveryOther(a) {
	return a.map((v, i) => (i % 2 === 1 ? v * 2 : v));
}
