String.prototype.toAlternatingCase = function () {
	// Define your method here :)
	return this.split("")
		.map((c) => (c == c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
		.join("");
};
