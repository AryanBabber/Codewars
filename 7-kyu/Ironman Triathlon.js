function iTri(s) {
	if (s === 0) return "Starting Line... Good Luck!";
	if (s < 2.4) return { Swim: `${(140.6 - s).toFixed(2)} to go!` };
	if (s < 2.4 + 112) return { Bike: `${(140.6 - s).toFixed(2)} to go!` };
	if (s < 2.4 + 112 + 16.2)
		return { Run: `${(140.6 - s).toFixed(2)} to go!` };
	if (s < 2.4 + 112 + 26.2) return { Run: "Nearly there!" };
	return "You're done! Stop running!";
}
