function cutIt(arr) {
	//coding here...
	let minLen = Math.min(...arr.map((c) => c.length));
	return arr.map((s) => s.slice(0, minLen));
}
