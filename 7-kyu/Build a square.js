function generateShape(integer) {
	let ans = [];
	for (let i = 0; i < integer; i++) {
		ans.push("+".repeat(integer));
	}

	return ans.join("\n");
}
