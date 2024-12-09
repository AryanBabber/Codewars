function counterEffect(hitCount) {
	return hitCount
		.split("")
		.map((v) => Array.from({ length: parseInt(v) + 1 }, (a, i) => i));
}
