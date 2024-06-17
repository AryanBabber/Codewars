function billboard(name, price = 30) {
	return [...name].map((_) => price).reduce((a, b) => a + b, 0);
}
