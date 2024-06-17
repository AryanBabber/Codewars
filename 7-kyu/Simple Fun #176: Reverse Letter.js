function reverseLetter(str) {
	return str
		.split("")
		.filter((c) => /[a-z]/i.test(c))
		.reverse()
		.join("");
}
