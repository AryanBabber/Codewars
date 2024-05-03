function stockList(lA, lC) {
	if (lA.length === 0 || lC.length === 0) return "";
	const arrs = [];
	let L = "";
	let N = 0;
	for (let i = 0; i < lC.length; i++) {
		L = lC[i];
		N = 0;
		for (let j = 0; j < lA.length; j++) {
			if (lA[j][0] === lC[i]) {
				N += lA[j].match(/[\d]+/g) * 1;
			}
		}
		let str = `(${L} : ${N})`;
		arrs.push(str);
	}
	return arrs.join(" - ");
}
