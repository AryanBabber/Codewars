function initializeNames(name) {
	// Insert your brilliant code here
	let n = name.split(" ");

	return n
		.map((v, i) => (i == 0 || i == n.length - 1 ? v : v.slice(0, 1) + "."))
		.join(" ");
}
