function foldTo(distance) {
	if (distance < 0) return null;

	let init = 0.0001;
	let count = 0;

	while (init <= distance) {
		init *= 2;
		count++;
	}

	return count;
}
