function gracefulTipping(bill) {
	bill *= 1.15;
	const mult = Math.ceil(5 * Math.pow(10, Math.floor(Math.log10(bill)) - 1));
	return Math.ceil(bill / mult) * mult;
}
