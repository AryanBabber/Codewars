function listToArray(list) {
	let arr = [];

	while (list != null) {
		arr.push(list.value);
		list = list.next;
	}

	return arr;
}
