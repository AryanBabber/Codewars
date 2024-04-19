function nbDig(n, d) {
	// your code
	let cnt = 0;
	for (let i = 0; i <= n; i++) {
		let sq = i * i + "";
		sq.split("").map((v) => (+v == d ? cnt++ : null));
	}

	return cnt;
}
