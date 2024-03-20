function geometricSequenceElements(a, r, n) {
	// Your code here!
	let arr = [a];
	for (let i = 1; i < n; i++) {
		arr.push(a * Math.pow(r, i));
	}

	return arr.join(", ");
}
