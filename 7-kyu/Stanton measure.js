function stantonMeasure(a) {
	let o = {};
	for (const num of a) {
		o[num] = o[num] ? o[num] + 1 : 1;
	}
	return o[o[1]] || 0;
}
