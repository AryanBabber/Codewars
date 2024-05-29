function lowercaseCount(str) {
	//How many?
	return str.split("").filter((c) => /[a-z]/g.test(c)).length;
}
