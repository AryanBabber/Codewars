function giveMeFive(obj) {
	let ans = [];
	for (let o in obj) {
		if (o.length % 5 == 0) ans.push(o);
		if (obj[o].length % 5 == 0) ans.push(obj[o]);
	}
	return ans;
}
