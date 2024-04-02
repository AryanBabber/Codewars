let snail = function (array) {
	let finalArr = [];

	while (array.length) {
		finalArr.push(...array.shift());
		array.map((a) => finalArr.push(a.pop()));
		array.reverse().map((a) => a.reverse());
	}

	return finalArr;
};
