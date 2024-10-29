const spacey = (array) =>
	array.map((v, i, arr) => arr.slice(0, i + 1).join(""));
