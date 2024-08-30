function balance(left, right) {
	let l = left
		.split("")
		.map((v) => (v === "!" ? (v = 2) : (v = 3)))
		.reduce((a, b) => a + b, 0);
	let r = right
		.split("")
		.map((v) => (v === "!" ? (v = 2) : (v = 3)))
		.reduce((a, b) => a + b, 0);
	return l > r ? "Left" : l === r ? "Balance" : "Right";
}
