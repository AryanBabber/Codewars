function explode(s) {
	return s
		.split("")
		.map((a) => a.repeat(parseInt(a)))
		.join("");
}
