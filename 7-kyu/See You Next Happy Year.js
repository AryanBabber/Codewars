function nextHappyYear(year) {
	let answer = 0;
	for (let i = year + 1; ; i++) {
		if ([...new Set(("" + i).split(""))].length === 4) {
			answer = i;
			break;
		}
	}
	return answer;
}
