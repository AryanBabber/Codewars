function getStrings(city) {
	city = city.toLowerCase().replace(/[^a-z]/gi, "");
	const arr = [...new Set(city)];
	return arr.map((v) => {
		const l = city.length;
		const count = city.replace(new RegExp(`${v}`, "g"), "").length;
		return `${v}:` + "*".repeat(l - count);
	}).join`,`;
}
