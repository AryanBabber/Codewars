function evil(n) {
	return (
		"It's " +
		(n
			.toString(2)
			.split("")
			.filter((s) => s === "1").length % 2
			? "Odious"
			: "Evil") +
		"!"
	);
}
