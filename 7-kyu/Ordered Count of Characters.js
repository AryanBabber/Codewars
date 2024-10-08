var orderedCount = (text) => {
	let x = text.split("");
	let dic = {};
	let res = [];
	let finalRes = [];

	x.forEach((letter, idx) => {
		!dic[letter] ? (dic[letter] = [1, idx]) : (dic[letter][0] += 1);
	});
	for (letter in dic) {
		res.push([letter, dic[letter]]);
	}
	let sortedRes = res.sort(function (a, b) {
		return a[1][1] - b[1][1];
	});
	sortedRes.forEach((letter) => {
		finalRes.push([letter[0], letter[1][0]]);
	});
	return finalRes;
};
