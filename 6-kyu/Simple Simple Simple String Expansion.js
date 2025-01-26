function stringExpansion(s) {
	return s
		.replace(/\d\D+/g, (v) => {
			let digit = v.replace(/[^0-9]/g, "");
			let letters = v.replace(/[0-9]/g, "");
			return letters.split``.map((v) => v.repeat(digit)).join``;
		})
		.replace(/\d/g, "");
}
