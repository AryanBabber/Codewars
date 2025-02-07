function capitalsFirst(str) {
	let arr = [];
	let arr2 = [];
	let count = 0;
	str.split(" ").map((v) =>
		v[0] === v[0].toUpperCase() ? arr.push(v) : arr2.push(v)
	);
	return arr
		.filter((v) => v[0].match(/[A-Z]/))
		.concat(arr2.filter((v) => v[0].match(/[a-z]/)))
		.join(" ");
}
