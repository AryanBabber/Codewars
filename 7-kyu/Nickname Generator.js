function nicknameGenerator(name) {
	return name.length < 4
		? "Error: Name too short"
		: name.slice(0, isVowel(name.charAt(2).toLowerCase()) ? 4 : 3);
}

const isVowel = (n) => n == "a" || n == "e" || n == "i" || n == "o" || n == "u";
