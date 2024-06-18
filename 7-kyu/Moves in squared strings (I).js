function vertMirror(str) {
	// Your code
	return str
		.split("\n")
		.map((s) => s.split("").reverse().join(""))
		.join("\n");
}
function horMirror(str) {
	// Your code
	return str.split("\n").reverse().join("\n");
}
function oper(fct, s) {
	// Your code
	return fct(s);
}
