function compare(str1, str2) {
	str1 = str1 || "";
	str2 = str2 || "";

	const isAlphabetic = (str) => /^[a-zA-Z]*$/.test(str);
	if (!isAlphabetic(str1)) str1 = "";
	if (!isAlphabetic(str2)) str2 = "";

	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();

	const sumAscii = (str) =>
		str.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);

	return sumAscii(str1) === sumAscii(str2);
}
