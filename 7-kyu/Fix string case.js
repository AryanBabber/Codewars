function solve(s) {
	return s.split("").filter((c) => /[A-Z]/.test(c)).length <=
		s.split("").filter((c) => /[a-z]/.test(c)).length
		? s.toLowerCase()
		: s.toUpperCase();
}
