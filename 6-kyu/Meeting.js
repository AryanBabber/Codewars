function meeting(s) {
	return s
		.replace(/;/gi, " ")
		.split(" ")
		.map((v) => v.split(":").reverse().join(", ").toUpperCase())
		.sort()
		.map((v) => "(" + v + ")")
		.join("");
}
