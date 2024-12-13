function convertHashToArray(hash) {
	return Object.entries(hash).sort((a, b) => a[0].localeCompare(b[0]));
}
