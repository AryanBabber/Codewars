function roundIt(n) {
	let sn = String(n)
		.split(".")
		.reduce((a, b) => a.length - b.length);
	return sn < 0 ? Math.ceil(n) : sn > 0 ? Math.floor(n) : Math.round(n);
}
