let incrementString = (str) =>
	str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
