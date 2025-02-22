function howMuch(m, n) {
	let mymin = 0;
	let mymax = 0;
	let numcars = 0;
	let numboats = 0;
	let result = [];
	if (m > n) {
		mymin = n;
		mymax = m;
	} else {
		mymin = m;
		mymax = n;
	}

	for (let i = mymin; i < mymax + 1; i++) {
		if (i > 8) {
			numcars = GetCar(i);
			numboats = GetBoat(i);
		}

		if (numcars > 0 && numboats > 0) {
			result.push([`M: ${i}`, `B: ${numboats}`, `C: ${numcars}`]);
		}
	}

	return result;

	function GetCar(i) {
		let numcars = 0;

		if ((i - 1) % 9 == 0) numcars = (i - 1) / 9;

		return numcars;
	}

	function GetBoat(i) {
		let numboats = 0;
		if ((i - 2) % 7 == 0) numboats = (i - 2) / 7;

		return numboats;
	}
}
