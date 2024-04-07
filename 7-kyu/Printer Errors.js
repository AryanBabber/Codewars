function printerError(s) {
	// your code
	return (
		s.split("").filter((v) => !/[a-m]/gi.test(v)).length + "/" + s.length
	);
}
