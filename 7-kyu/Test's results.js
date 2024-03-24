function testResult(array) {
	let avg = +(array.reduce((a, b) => a + b, 0) / array.length).toFixed(3);
	let obj = { h: 0, a: 0, l: 0 };
	for (let a of array) {
		if (a >= 9) obj["h"]++;
		else if (a >= 7) obj["a"]++;
		else obj["l"]++;
	}
	let ans = [avg, obj];
	if (array.every((a) => a >= 9)) ans.push("They did well");
	return ans;
}
