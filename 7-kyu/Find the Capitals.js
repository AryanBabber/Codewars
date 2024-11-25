function capital(capitals) {
	return capitals.map(
		(v) => `The capital of ${v.state || v.country} is ${v.capital}`
	);
}
