function modifyMultiply(str, loc, num) {
	return Array(num).fill(str.split(" ")[loc]).join("-");
}
