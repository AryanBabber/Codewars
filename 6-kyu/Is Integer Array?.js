function isIntArray(arr) {
	return Array.isArray(arr) && arr.every((v) => Math.floor(v) === v);
}
