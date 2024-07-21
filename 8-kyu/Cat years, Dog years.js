var humanYearsCatYearsDogYears = function (humanYears) {
	let i = 1;
	let cy = 0;
	let dy = 0;

	while (i <= humanYears) {
		if (i === 1) {
			cy += 15;
			dy += 15;
		} else if (i === 2) {
			cy += 9;
			dy += 9;
		} else {
			cy += 4;
			dy += 5;
		}

		i++;
	}

	return [humanYears, cy, dy];
};
