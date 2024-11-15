function chain(input, fs) {
	// implement the "chain" function
	return fs.reduce((a, b) => b(a), input);
}
