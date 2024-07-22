function stat(str) {
	if (str === "") return "";
	let newString = str.split(", ");
	let times = [];

	for (let i = 0; i < newString.length; i++) {
		newString[i] = newString[i].split("|");
		let total = 0;
		for (let j = 0; j < newString[i].length; j++) {
			if (j === 0) total += +newString[i][j] * 3600;
			if (j === 1) total += +newString[i][j] * 60;
			if (j === 2) total += +newString[i][j];
		}
		times.push(total);
	}
	times.sort((a, b) => a - b);
	let rangeSeconds = times[times.length - 1] - times[0];
	let rangeTime = calculateTime(rangeSeconds);
	let averageSeconds = times.reduce((pv, pc) => pv + pc) / times.length;
	let averageTime = calculateTime(averageSeconds);
	let medianSeconds =
		times.length % 2 !== 0
			? times[(times.length - 1) / 2]
			: (times[times.length / 2] + times[times.length / 2 - 1]) / 2;
	let medianTime = calculateTime(medianSeconds);

	return `Range: ${rangeTime} Average: ${averageTime} Median: ${medianTime}`;
}

function calculateTime(totalSeconds) {
	let hours = Math.floor(totalSeconds / 3600);
	let minutes = Math.floor((totalSeconds / 60) % 60);
	let seconds = Math.floor(totalSeconds % 60);
	return [
		hours.toString().length < 2 ? "0" + hours : hours,
		minutes.toString().length < 2 ? "0" + minutes : minutes,
		seconds.toString().length < 2 ? "0" + seconds : seconds,
	].join("|");
}
