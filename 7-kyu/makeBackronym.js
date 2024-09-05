var makeBackronym = function (string) {
	return string
		.toUpperCase()
		.split("")
		.map((elem) => dict[elem])
		.join(" ");
};
