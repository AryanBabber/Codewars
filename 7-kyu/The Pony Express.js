function riders(stations) {
	let riders = 0;
	let sum = 0;
	for (let i = 0; i < stations.length; i++) {
		sum += stations[i];
		if (sum > 100) {
			riders++;
			sum = 0;
			i--;
		}
	}
	return riders + 1;
}
