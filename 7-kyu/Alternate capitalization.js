function capitalize(s) {
	let arr = [];
	arr.push(s.split("").map((v, i) => (i % 2 === 0 ? v.toUpperCase() : v)).join(""));
    arr.push(s.split("").map((v, i) => (i % 2 ? v.toUpperCase() : v)).join(""));
	return arr;
}
