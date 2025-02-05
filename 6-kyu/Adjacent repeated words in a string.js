function countAdjacentPairs(searchString) {
	let words = searchString.toLowerCase().split(" ");
	let count = 0;

	for (let i = 0; i < words.length - 1; i++) {
		if (words[i] === words[i + 1]) {
			count++;
			while (i < words.length - 1 && words[i] === words[i + 1]) {
				i++;
			}
		}
	}

	return count;
}
