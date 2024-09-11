function twoDecimalPlaces(number) {
	return number < 0
		? Math.ceil(number * 100) / 100
		: Math.floor(number * 100) / 100;
}
