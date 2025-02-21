function sumIntervals(intervals) {
	if (!intervals || intervals.length === 0) return 0;

	intervals.sort((a, b) => a[0] - b[0]);

	let totalLength = 0;
	let [start, end] = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		let [currentStart, currentEnd] = intervals[i];

		if (currentStart <= end) {
			end = Math.max(end, currentEnd);
		} else {
			totalLength += end - start;
			[start, end] = [currentStart, currentEnd];
		}
	}

	totalLength += end - start;

	return totalLength;
}
