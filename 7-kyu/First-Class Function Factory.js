function factory(x) {
	return (fn) => fn.map((v) => v * x);
}
