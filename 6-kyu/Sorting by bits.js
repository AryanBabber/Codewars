function sortByBit(arr) {
	return arr.sort((a, b) =>
		countZeroes(a) === countZeroes(b)
			? a - b
			: countZeroes(a) - countZeroes(b)
	);
}

const countZeroes = (n) => {
	return n.toString(2).replaceAll("0", "").length;
};
