function solve(a, b) {
	let str1 = a
		.split("")
		.filter((v) => !b.split("").includes(v))
		.join("");
	let str2 = b
		.split("")
		.filter((v) => !a.split("").includes(v))
		.join("");
	return str1 + str2;
}
