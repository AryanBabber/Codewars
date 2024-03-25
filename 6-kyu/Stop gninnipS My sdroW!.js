function spinWords(string) {
	return string
		.split(" ")
		.map((a) => (a.length >= 5 ? a.split("").reverse().join("") : a))
		.join(" ");
}
