function freqSeq(str, sep) {
	let obj = {};

	for (let ch of str) {
		obj[ch] = obj[ch] ? (obj[ch] += 1) : 1;
	}

	return str
		.split("")
		.map((v) => obj[v])
		.join(sep);
}
