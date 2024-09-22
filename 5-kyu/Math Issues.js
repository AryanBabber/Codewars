Math.round = function (number) {
	return (number * 10) % 10 < 5 ? Math.floor(number) : Math.ceil(number);
};

Math.ceil = function (number) {
	return (number * 10) % 10 == 0 ? parseInt(number) : parseInt(number + 1);
};

Math.floor = function (number) {
	return parseInt(number);
};
