const rgb = (r, g, b) => toHex(r) + toHex(g) + toHex(b);

function toHex(numb) {
	if (numb <= 0) return "00";
	if (numb > 255) return "FF";
	let ans = numb.toString(16).toUpperCase();

	return parseInt(ans, 16) > 15 ? ans : "0" + ans;
}
