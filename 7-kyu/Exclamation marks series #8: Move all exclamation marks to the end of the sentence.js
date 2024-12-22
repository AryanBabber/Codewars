function remove(s) {
	const marks = s.length - s.replace(/!/g, "").length;
	return s.replace(/!/g, "") + "!".repeat(marks);
}
