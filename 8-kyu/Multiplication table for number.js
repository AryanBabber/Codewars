function multiTable(number) {
	// good luck
	let arr = [];
	for (let i = 1; i <= 10; i++) {
		arr.push(`${i} * ${number} = ${i * number}`);
	}

	return arr.join("\n");
}
