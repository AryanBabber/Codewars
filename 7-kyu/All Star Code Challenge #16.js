function noRepeat(str) {
	for (let i of str) {
		if (str.split(i).length == 2) return i;
	}
}
