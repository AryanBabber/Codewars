function findOddNames(list) {
	return list.filter(
		(li) =>
			li.firstName
				.split("")
				.map((c) => c.charCodeAt(0))
				.reduce((a, b) => a + b, 0) %
				2 ===
			1
	);
}
