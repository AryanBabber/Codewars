function vampireTest(a, b) {
	return (
		("" + a + b).split("").sort().join() ==
		(a * b + "").split("").sort().join()
	);
}
