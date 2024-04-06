function points(games) {
	return games
		.map((v) => {
			let [h, a] = v.split(":").map((e) => +e);
			return h > a ? 3 : h == a ? 1 : 0;
		})
		.reduce((a, b) => a + b, 0);
}
