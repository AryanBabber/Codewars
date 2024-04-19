function cookPancakes(n, m) {
	if (n === 0) return 0;
	if (m === 1) return 2 * n;
	const fullBatches = Math.floor(n / m);
	const remainingPancakes = n % m;
	const fullBatchTime = fullBatches * 2;
	const remainingTime = remainingPancakes > 0 ? 2 : 0;
	return fullBatchTime + remainingTime;
}
