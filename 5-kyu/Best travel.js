const chooseBestSum = (t, k, ls) =>
	ls
		.reduce(
			(r, e) =>
				r.concat(
					r.filter((c) => c.length < k).map((c) => c.concat([e]))
				),
			[[]]
		)
		.filter((c) => c.length === k)
		.map((c) => c.reduce((a, b) => a + b))
		.filter((s) => s <= t)
		.sort((a, b) => b - a)[0] || null;
