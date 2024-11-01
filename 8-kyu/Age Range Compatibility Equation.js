function datingRange(age) {
	//return min-max
	if (age <= 14) return `${Math.floor(age * 0.9)}-${Math.floor(age * 1.1)}`;
	return `${Math.floor(age / 2 + 7)}-${(age - 7) * 2}`;
}
