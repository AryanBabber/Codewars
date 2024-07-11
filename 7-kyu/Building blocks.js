class Block {
	constructor(data) {
		this.data = data;
	}

	getWidth() {
		return this.data[0];
	}

	getHeight() {
		return this.data[2];
	}

	getLength() {
		return this.data[1];
	}

	getVolume() {
		return this.data.reduce((a, b) => a * b);
	}

	getSurfaceArea() {
		let [w, h, l] = this.data;
		return 2 * (l * w) + 2 * (h * w) + 2 * (l * h);
	}
}
