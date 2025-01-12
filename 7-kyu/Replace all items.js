function replaceAll(seq, find, replace) {
	if (typeof seq === "string")
		return seq
			.split("")
			.map((v) => (v === find ? (v = replace) : v))
			.join("");
	return seq.map((v) => (v === find ? (v = replace) : v));
}
