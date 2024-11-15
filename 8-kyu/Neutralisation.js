function neutralise(s1, s2) {
	// Here be dragons!
	return s1
		.split("")
		.map((c, i) => (c !== s2.charAt(i) ? "0" : c))
		.join("");
}
