function findNextSquare(sq) {
	// Return the next square if sq is a perfect square, -1 otherwise
	let root = Math.pow(sq, 0.5);

	return root % 1 == 0 ? Math.pow(root+1, 2) : -1;
}
