function swap(string) {
	return string
		.split("")
		.map((v) => (isVowel(v) && v === v.toLowerCase() ? v.toUpperCase() : v))
		.join("");
}

const isVowel = (n) => n == "a" || n == "e" || n == "i" || n == "o" || n == "u";
