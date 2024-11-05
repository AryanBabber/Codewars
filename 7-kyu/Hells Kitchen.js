function gordon(str) {
	return str
		.replaceAll(/a/gi, "@")
		.replaceAll(/[eiou]/gi, "*")
		.toUpperCase()
		.split(" ")
		.map((s) => s + "!!!!")
		.join(" ");
}
