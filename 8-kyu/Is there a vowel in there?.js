function isVow(a) {
	return a.map((c) =>
		/[aeiou]/g.test(String.fromCharCode(c)) ? String.fromCharCode(c) : c
	);
}
