function maxDiff(list) {
	return list.length < 2 ? 0 : Math.max(...list) - Math.min(...list);
}
