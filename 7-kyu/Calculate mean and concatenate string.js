function mean(lst) {
	let nums = lst.filter((c) => /[^a-z]/i.test(c)).map(parseFloat);
	let str = lst.filter((c) => /[a-z]/i.test(c)).join("");

	return [nums.reduce((a, b) => a + b, 0) / nums.length, str];
}
