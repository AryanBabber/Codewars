function findNextPower(val, pow) {
	let n = 1;
	while (Math.pow(n, pow) <= val) {
		n++;
	}
	return Math.pow(n, pow);
}
