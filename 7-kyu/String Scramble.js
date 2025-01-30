function scramble(str, arr) {
	let r = [];
	for (i = 0; i < arr.length; i++) r[arr[i]] = str[i];
	return r.join("");
}
