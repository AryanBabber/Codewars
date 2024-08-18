const countDeafRats = (town) => {
	// Your code here
	if (town != null) {
		[left, right] = town.split("P");
		const a = left + right.split("").reverse().join("");
		return (a.match(/O~|~O/gi) || []).filter((v) => v == "O~").length;
	}
	return 0;
};
