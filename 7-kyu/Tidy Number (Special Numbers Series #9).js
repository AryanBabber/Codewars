function tidyNumber(n) {
	return (
		n ===
		+String(n)
			.split("")
			.sort((a, b) => +a - +b)
			.join("")
	);
}
