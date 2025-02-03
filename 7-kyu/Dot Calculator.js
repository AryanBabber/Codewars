function dotCalculator(equation) {
	let op = equation.replaceAll(".", "").trim();
	let dots = equation
		.split(/[^.]/)
		.filter((s) => s)
		.map((v) => v.length);
	return dots.reduce((a, b) => {
		switch (op) {
			case "+":
				return ".".repeat(a + b);
			case "-":
				return ".".repeat(a - b);
			case "*":
				return ".".repeat(a * b);
			case "//":
				return ".".repeat(a / b);
			default:
				return ".";
		}
	});
}
