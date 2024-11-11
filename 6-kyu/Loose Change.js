function looseChange(
	cents,
	coins = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 }
) {
	if (cents <= 0) {
		return coins;
	}

	cents = Math.floor(cents);

	if (cents >= 25) {
		coins.Quarters++;
		return looseChange(cents - 25, coins);
	} else if (cents >= 10) {
		coins.Dimes++;
		return looseChange(cents - 10, coins);
	} else if (cents >= 5) {
		coins.Nickels++;
		return looseChange(cents - 5, coins);
	} else {
		coins.Pennies++;
		return looseChange(cents - 1, coins);
	}
}
