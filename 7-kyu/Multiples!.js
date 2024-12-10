function multiple(x) {
	let s = "";

	if (x % 3 == 0) {
		s += "Bang";
	}

	if (x % 5 == 0) {
		s += "Boom";
	}

	return s || "Miss";
}
