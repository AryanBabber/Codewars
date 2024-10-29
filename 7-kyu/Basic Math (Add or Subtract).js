function calculate(str) {
	return eval(str.replaceAll("plus", "+").replaceAll("minus", "-")).toString();
}
