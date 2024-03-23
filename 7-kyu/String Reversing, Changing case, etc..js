function reverseAndMirror(s1, s2) {
	let newS1 = s1
		.split("")
		.map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
		.join("");
	return (
		s2
			.split("")
			.map((v) =>
				v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()
			)
			.reverse()
			.join("") +
		"@@@" +
		newS1.split("").reverse().join("") +
		newS1
	);
}
