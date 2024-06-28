function sortMyString(S) {
	let s1 = "";
	let s2 = "";

	for (let i = 0; i < S.length; i++) {
		if (i % 2 == 0) s1 += S.charAt(i);
		else s2 += S.charAt(i);
	}

	return s1 + " " + s2;
}
