function stringClean(s) {
	return s
		.split("")
		.filter((a) => /\D/gi.test(a))
		.join("");
}
