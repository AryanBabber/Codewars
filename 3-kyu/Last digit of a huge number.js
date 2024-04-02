function tm(a, n, m) {
	return Math.round((a % m) * Math.pow(a % m, (n + 3) % 4)) % m;
}

function lastDigit(as) {
	if (as.length == 0) return 1;
	let r0 = false;
	let rb2 = false;
	let rm4 = 1;
	for (let i = as.length - 1; i > 0; --i) {
		if (r0) {
			rm4 = 1;
			r0 = false;
			rb2 = false;
		} else {
			rm4 = rb2 && as[i] % 4 === 2 ? 0 : tm(as[i], rm4, 4);
			r0 = as[i] === 0;
			rb2 = !r0 && !(as[i] === 1);
		}
	}
	return r0 ? 1 : tm(as[0], rm4, 10);
}
