function change(string) {
	const result = Array(26).fill("0");
	for (const char of string.toLowerCase()) {
		if (char >= "a" && char <= "z") result[char.charCodeAt(0) - 97] = "1";
	}
	return result.join("");
}
