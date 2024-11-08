const paintLetterboxes = (start, end) => {
	let arr = Array(10).fill(0);

	for (let i = start; i <= end; i++) {
		let s = String(i).split("");
		s.forEach((v) => arr[v]++);
	}

	return arr;
};
