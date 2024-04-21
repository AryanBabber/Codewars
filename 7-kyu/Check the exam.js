function checkExam(a, b) {
	// good luck
	let score = 0;
	a.map((v, i) => (b[i] == "" ? 0 : v == b[i] ? (score += 4) : score--));
	return score < 0 ? 0 : score;
}
