function sameCase(a, b) {
	const RegExpLetters = new RegExp(`[a-zA-Z]`);
	if (!RegExpLetters.test(a) || !RegExpLetters.test(b)) return -1;
	if (
		(a.toUpperCase() === a && b.toUpperCase() === b) ||
		(a.toLowerCase() === a && b.toLowerCase() === b)
	)
		return 1;
	return 0;
}
