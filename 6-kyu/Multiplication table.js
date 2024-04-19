const multiplicationTable = (size) => {
	// insert code here
	let res = [];

	for (let i = 1; i <= size; i++) {
		let t = [];
		for (let j = 1; j <= size; j++) {
			t.push(j * i);
		}

		res.push(t);
	}

	return res;
};

console.log(multiplicationTable(4));
