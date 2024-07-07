function kebabize(str) {
	return str
		.replace(/([A-Z])/g, "-$1")
		.toLowerCase()
		.replace(/^-|[0-9]/g, "");
}
