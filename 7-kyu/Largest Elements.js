function largest(n, array) {
	// Find the n highest elements in a list
	return array.sort((a, b) => a - b).slice(array.length - n);
}
