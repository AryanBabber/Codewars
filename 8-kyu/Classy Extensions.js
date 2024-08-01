class Cat extends Animal {
	constructor(name) {
		super(name);
		this.name = name;
	}

	speak() {
		return `${this.name} meows.`;
	}
}
