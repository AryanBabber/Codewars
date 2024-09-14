function chained(functions) {
	return function (n) {
		return functions.reduce((a, b) => b(a), n);
	};
}
