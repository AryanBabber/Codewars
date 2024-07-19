function toFreud(string) {
	return !string
		? ""
		: string
				.split(" ")
				.map((v) => "sex")
				.join(" ");
}
