// TODO
Array.prototype.square = function () {
	return this.map((v) => v * v);
};

Array.prototype.cube = function () {
	return this.map((v) => v ** 3);
};

Array.prototype.average = function () {
	return this.length == 0 ? NaN : this.reduce((a, b) => a + b) / this.length;
};

Array.prototype.sum = function () {
	return this.reduce((a, b) => a + b, 0);
};

Array.prototype.odd = function () {
	return this.filter((a) => a % 2);
};

Array.prototype.even = function () {
	return this.filter((a) => a % 2 == 0);
};
