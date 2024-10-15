function consonantCount(str) {
	return str.split("").filter((c) => /[^aeiou\d\W_]/gi.test(c)).length;
}
