function determinant(m) {
	if (m.length == 1) {
		return m[0][0];
	}

	return m[0].reduce(
		(acc, x, col) =>
			acc +
			(col & 1 ? -1 : 1) * x * determinant(minor(m, { i: 0, j: col })),
		0
	);
}

function minor(m, i) {
	function removeEl(i, m) {
		return m.slice(0, i).concat(m.slice(i + 1));
	}

	return removeEl(i.i, m.map(removeEl.bind(null, i.j)));
}
