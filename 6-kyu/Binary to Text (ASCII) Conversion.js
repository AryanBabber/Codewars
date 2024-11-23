function binaryToString(binary) {
	return !binary.length
		? ""
		: binary
				.match(/.{8}/g)
				.map((v) => String.fromCharCode(parseInt(v, 2)))
				.join("");
}
