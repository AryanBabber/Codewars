function scrollingText(text) {
	return text
		.toUpperCase()
		.split("")
		.map((_, i, arr) => [...arr.slice(i), ...arr.slice(0, i)].join(""));
}
