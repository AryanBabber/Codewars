function encode(str) {
	//code me
	return str.replace(/[a-z]/gi, (a) => a.toLowerCase().charCodeAt(0) - 96);
}
