const colorOf = (r, g, b) => "#" + getHex(r) + getHex(g) + getHex(b);

const getHex = (s) =>
	(Number(s).toString(16).length === 1 ? "0" : "") + Number(s).toString(16);
