function gcdi(x, y) {
	// your code
	x = Math.abs(x);
	y = Math.abs(y);
	return y === 0 ? x : gcdi(y, x % y);
}
function lcmu(x, y) {
	// your code
	x = Math.abs(x);
	y = Math.abs(y);
	return (x * y) / gcdi(x, y);
}
function som(a, b) {
	// your code
	return a + b;
}
function maxi(a, b) {
	// your code
	return Math.max(a, b);
}
function mini(a, b) {
	// your code
	return Math.min(a, b);
}
function operArray(fct, arr, init) {
	// your code
	return arr.map((v) => {
		init = fct(init, v);
		return init;
	});
}
