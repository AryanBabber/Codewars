function scramble(str, arr) {
	for (let r = [], i = 0; i < arr.length; i++) r[arr[i]] = str[i];
	return r.join("");
}
