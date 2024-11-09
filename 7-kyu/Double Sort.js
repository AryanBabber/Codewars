function dbSort(a) {
	let nums = a.filter((v) => typeof v == "number").sort((a, b) => a - b);
	let strings = a.filter((v) => typeof v == "string").sort();

	return [...nums, ...strings];
}
