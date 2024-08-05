function excludingVatPrice(price) {
	return price == null ? -1 : +((price * 100) / 115).toFixed(2);
}
