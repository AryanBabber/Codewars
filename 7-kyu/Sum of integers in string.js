function sumOfIntegersInString(s) {
	return s.split(/\D/).reduce((a, b) => a + +b, 0);
}
