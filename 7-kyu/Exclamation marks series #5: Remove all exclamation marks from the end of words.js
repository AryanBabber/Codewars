function remove(s) {
	return s
		.split(" ")
		.map((v) => v.replace(/!+$/gi, ""))
		.join(" ");
}
