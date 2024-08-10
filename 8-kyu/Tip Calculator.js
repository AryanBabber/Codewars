function calculateTip(amount, rating) {
	let tip = 0;

	switch (rating.toLowerCase()) {
		case "excellent":
			tip = 20;
			break;
		case "great":
			tip = 15;
			break;
		case "good":
			tip = 10;
			break;
		case "poor":
			tip = 5;
			break;
		case "terrible":
			tip = 0;
			break;
		default:
			return "Rating not recognised";
	}

	return Math.ceil((amount * tip) / 100);
}
