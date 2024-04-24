function enough(cap, on, wait) {
	// your code here
	let remaining = -cap + on + wait;

	return remaining <= 0 ? 0 : remaining;
}
