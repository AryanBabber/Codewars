function golfScoreCalculator(parList, scoreList) {
	let par = parList.split("").reduce((a, b) => a + b * 1, 0);
	let score = scoreList.split("").reduce((a, b) => a + b * 1, 0);

	return score - par;
}
