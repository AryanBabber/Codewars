const isSquare = (arr) =>
	arr.length > 0 ? arr.every((a) => a == (a ** 0.5) ** 2) : undefined;
