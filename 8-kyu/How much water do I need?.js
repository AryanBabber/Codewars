function howMuchWater(water, load, clothes) {
	return clothes > load * 2
		? "Too much clothes"
		: load > clothes
		? "Not enough clothes"
		: +(water * 1.1 ** (clothes - load)).toFixed(2);
}
