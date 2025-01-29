// return masked string
function maskify(cc) {
	return (
		"#".repeat(Math.max(cc.length - 4, 0)) +
		cc.substring(Math.max(cc.length - 4, 0))
	);
}
