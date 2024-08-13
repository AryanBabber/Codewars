function mostFrequentItemCount(collection) {
	let obj = {};

	for (let num of collection) {
		obj[num] = obj[num] ? obj[num] + 1 : 1;
	}

	return !collection.length ? 0 : Math.max(...Object.values(obj));
}
