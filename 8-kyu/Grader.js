function grader(score) {
	return score < 0.6 || score > 1
		? "F"
		: score < 0.7
		? "D"
		: score < 0.8
		? "C"
		: score < 0.9
		? "B"
		: "A";
}
