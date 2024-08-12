function getDivisorsCnt(n) {
	let num = 0;
	if (n == 1) return 1;
	if (n % Math.sqrt(n) == 0) num++;
	for (let i = 1; i < Math.sqrt(n); i++) {
		if (n % i == 0) {
			num += 2;
		}
	}
	return num;
}
