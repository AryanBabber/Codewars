function explode(x) {
	if (typeof x[1] === "number" && typeof x[0] === "number") {
		const l = x[0] + x[1];
		return Array.from({ length: l }).fill(x);
	}
	if (typeof x[1] === "number" || typeof x[0] === "number") {
		let l = 0;
		typeof x[0] === "number" ? (l = x[0]) : (l = x[1]);
		return Array.from({ length: l }).fill(x);
	}
	if (typeof x[1] !== "number" && typeof x[0] !== "number") {
		return "Void!";
	}
}
