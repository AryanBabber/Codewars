function movingShift(s, shift) {
	const wordsLowerCase = "abcdefghijklmnopqrstuvwxyz";
	const wordsUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	s = s.split``.map((v) => {
		if (/[A-Z]/.test(v)) {
			const index = wordsUpperCase.indexOf(v);
			const saved = shift;
			shift += 1;
			return wordsUpperCase[(index + saved) % 26];
		}
		if (/[a-z]/.test(v)) {
			const index = wordsLowerCase.indexOf(v);
			const saved = shift;
			shift += 1;
			return wordsLowerCase[(index + saved) % 26];
		}
		shift += 1;
		return v;
	}).join``;
	let sq = Math.ceil(s.length / 5);
	const arr = [];
	for (let i = 0; i < 5; i++) {
		arr.push(s.slice(sq * i, sq * (i + 1)));
	}
	return arr;
}

function demovingShift(arr, shift) {
	const wordsLowerCase = "abcdefghijklmnopqrstuvwxyz";
	const wordsUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return arr.join``.split``.map((v) => {
		if (/[A-Z]/.test(v)) {
			let index = wordsUpperCase.indexOf(v);
			const saved = shift;
			shift += 1;
			index - saved < 0
				? (index = 26 - (Math.abs(index - saved) % 26))
				: (index = Math.abs(index - saved) % 26);
			if (index === 26) {
				index = 0;
			}
			return wordsUpperCase[index];
		}
		if (/[a-z]/.test(v)) {
			let index = wordsLowerCase.indexOf(v);
			const saved = shift;
			shift += 1;
			index - saved < 0
				? (index = 26 - (Math.abs(index - saved) % 26))
				: (index = Math.abs(index - saved) % 26);
			if (index === 26) {
				index = 0;
			}
			return wordsLowerCase[index];
		}
		shift += 1;
		return v;
	}).join``;
}
