function hello(name) {
	return `Hello, ${
		name
			? name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
			: "World"
	}!`;
}
