function vowelOne(s) {
	return s
		.split("")
		.map((v) => (isVowel(v.toLowerCase()) ? "1" : "0"))
		.join("");
}

const isVowel = (n) => n == "a" || n == "e" || n == "i" || n == "o" || n == "u";
