function accum(s) {
	return s
		.split("")
		.map((v, i) => v.toUpperCase() + v.repeat(i).toLowerCase())
		.join("-");
}
