function smallest(n) {
	// Your code
	Array.prototype.move = function (from, to) {
		this.splice(to, 0, this.splice(from, 1)[0]);
		return this;
	};

	const len = `${n}`.length;
	const result = new Map();

	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			const newNumber = `${n}`.split("").move(i, j).join("");
			!result.has(+newNumber) && result.set(+newNumber, [i, j]);
		}
	}

	const minVal = Math.min(...result.keys());
	return [minVal, ...result.get(minVal)];
}
