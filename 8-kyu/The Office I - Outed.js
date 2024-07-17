function outed(meet, boss) {
	meet[boss] *= 2;
	let vals = Object.values(meet);
	let avg = vals.reduce((a, b) => a + b, 0) / vals.length;
	return avg <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
