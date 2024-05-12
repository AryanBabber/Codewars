function arithmetic(a, b, o) {
	//your code here!
	return eval(
		a +
			(o == "add"
				? "+"
				: o == "subtract"
				? "-"
				: o == "multiply"
				? "*"
				: "/") +
			b
	);
}
