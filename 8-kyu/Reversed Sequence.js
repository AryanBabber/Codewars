const reverseSeq = (n) => {
	return Array.from({ length: n }, (v) => (v = n--));
};
