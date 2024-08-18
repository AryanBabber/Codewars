function htmlspecialchars(formData) {
	// Insert your code here
	let obj = {
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"&": "&amp;",
	};

	return formData
		.split("")
		.map((a) => (obj[a] ? obj[a] : a))
		.join("");
}
