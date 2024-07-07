var findDigit = function (num, nth) {
	let arr = String(Math.abs(num)).split("");
	return nth < 1 ? -1 : nth > arr.length ? 0 : +arr.reverse()[nth - 1];
};
