function pickIt(arr) {
	var odd = [],
		even = [];
	//coding here
	for (let a of arr) {
		if (a % 2 == 0) even.push(a);
		else odd.push(a);
	}

	return [odd, even];
}
