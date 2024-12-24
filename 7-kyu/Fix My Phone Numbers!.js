function isItANum(str) {
	str = str.replace(/[^0-9]/gi, "");
	return str.length !== 11 ? "Not a phone number" : str;
}
