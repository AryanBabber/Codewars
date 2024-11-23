function remove(s) {
	return s
		.split(" ")
		.map((v) => v.replace(/(^\w+!$|^!\w+$)/, ""))
		.join(" ")
		.trim()
		.replace(/\s+/g, " ");
}
