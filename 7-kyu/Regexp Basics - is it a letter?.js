String.prototype.isLetter = function () {
	return /[a-z]{1}/i.test(this) && this.length === 1;
};
