function correctPolishLetters(string) {
	let polLetters = {
		ą: "a",
		ć: "c",
		ę: "e",
		ł: "l",
		ń: "n",
		ó: "o",
		ś: "s",
		ź: "z",
		ż: "z",
	};

	return string
		.split("")
		.map((v) => (polLetters[v] ? polLetters[v] : v))
		.join("");
}
