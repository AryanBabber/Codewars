function rentalCarCost(d) {
	// Your solution here
	return 40 * d - (d < 3 ? 0 : d < 7 ? 20 : 50);
}
