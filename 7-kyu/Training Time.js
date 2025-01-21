var shuffleIt = (arr, ...swap) => {
	for (var i = 0; i < swap.length; i++) {
		var [a, b] = [swap[i][0], swap[i][1]];
		[arr[a], arr[b]] = [arr[b], arr[a]];
	}
	return arr;
};
