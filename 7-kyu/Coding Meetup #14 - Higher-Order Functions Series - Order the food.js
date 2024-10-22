function orderFood(list) {
	const obj = {};
	list.map((v) => (obj[v.meal] = obj[v.meal] ? obj[v.meal] + 1 : 1));
	return obj;
}
