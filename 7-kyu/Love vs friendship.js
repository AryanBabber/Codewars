function wordsToMarks(string) {
	return string.split("").reduce((a, b) => a + (b.charCodeAt(0) - 96), 0);
}
