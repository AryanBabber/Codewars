function determineTime(durations) {
	let hours = 0;
	let min = 0;
	let sec = 0;
	durations.map((v) =>
		v
			.split(":")
			.map((v, i) =>
				i === 0
					? (hours += v * 1)
					: i === 1
					? (min += v * 1)
					: (sec += v * 1)
			)
	);
	min += sec / 60;
	hours += min / 60;
	return hours <= 24;
}
