function countLettersAndDigits(input) {
	return (input.match(/[0-9a-z]/gi) || []).length;
}
