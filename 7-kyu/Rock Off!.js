function solve(a, b) {
	const [x, y] = a.reduce(
		(p, a, i) => (a == b[i] ? p : (++p[a > b[i] ? 0 : 1], p)),
		[0, 0]
	);
	const m =
		x == y
			? 'that looks like a "draw"! Rock on!'
			: x > y
			? 'Alice made "Kurt" proud!'
			: 'Bob made "Jeff" proud!';
	return `${x}, ${y}: ${m}`;
}
