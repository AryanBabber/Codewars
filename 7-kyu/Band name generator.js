function bandNameGenerator(str) {
	return str[0] == str[str.length - 1]
		? str.substring(0, 1).toUpperCase() +
				str.substring(1) +
				str.substring(1)
		: "The " + str.substring(0, 1).toUpperCase() + str.substring(1);
}
