function catMouse(x) {
	return x.split(/[^.]/).join("").length <= 3 ? "Caught!" : "Escaped!";
}
