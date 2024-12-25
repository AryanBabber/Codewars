function nameInStr(str, name) {
	str = str.toLowerCase();
	name = name.toLowerCase();
	let arr = str.split``.filter((v) => name.includes(v));
	let pointer = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === name[pointer]) pointer++;
	}
	return pointer === name.length;
}
