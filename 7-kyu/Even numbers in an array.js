function evenNumbers(array, number) {
	return array
		.filter((c) => c % 2 === 0)
		.reverse()
		.slice(0, number)
		.reverse();
}
