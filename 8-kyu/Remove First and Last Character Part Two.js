function array(string) {
	let arr = string.split(",");

	return arr.length <= 2
		? null
		: arr.filter((_, i) => i > 0 && i < arr.length - 1).join(" ");
}
