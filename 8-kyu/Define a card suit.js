function defineSuit(card) {
	let obj = {
		"♣": "clubs",
		"♦": "diamonds",
		"♥": "hearts",
		"♠": "spades",
	};

	return obj[card.split(/\w/g).join("")];
}
