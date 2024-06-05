function sumMul(n, m) {
	//your idea here
	if (n >= m) return "INVALID";
	let temp = n;
	let sum = 0;
	while (n < m) {
		sum += n;
		n += temp;
	}

	return sum;
}
