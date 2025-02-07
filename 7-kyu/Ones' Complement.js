function onesComplement(n) {
	return n
        .replaceAll("0", "2")
        .replaceAll("1", "0")
        .replaceAll("2", "1")
}