var capitals = function (word) {
	return word
		.split("")
		.map((c, i) => (c == c.toUpperCase() ? i : null))
		.filter((c) => typeof c == "number");
};
