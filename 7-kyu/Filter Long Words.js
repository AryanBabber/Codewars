function filterLongWords(sentence, n) {
	return sentence.split(" ").filter((v) => v.length > n);
}
