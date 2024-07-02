function numberToPower(number, power) {
	console.info(Math.log2(1024));
	// Code here
	if (power == 0) return 1;
	let ans = 1;
	while (power > 0) {
		ans *= number;
		power--;
	}

	return ans;
}
