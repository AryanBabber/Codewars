function changer(str) {
	let dict = "abcdefghijklmnopqrstuvwxyza";
	return str
		.toLowerCase()
		.replace(/./g, (v) => {
			if (dict.indexOf(v) !== -1) {
				return dict[dict.indexOf(v) + 1];
			}
			return v;
		})
		.replace(/[aeiou]/g, (v) => v.toUpperCase());
}
