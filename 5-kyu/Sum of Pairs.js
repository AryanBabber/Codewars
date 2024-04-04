function sumPairs(ints, s) {
	if (ints.length < 2) return undefined;

	let inSet = new Set();

	for (let i = 0; i < ints.length; i++) {
		let need = s - ints[i];
		if (inSet.has(need)) {
			return [need, ints[i]];
		}
		inSet.add(ints[i]);
	}
	return undefined;
}
