function numObj(s) {
	let ans = [];

	for (let ss of s) {
		let obj = {};
		obj[ss] = String.fromCharCode(ss);
		ans.push(obj);
	}

	return ans;
}
