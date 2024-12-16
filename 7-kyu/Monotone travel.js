const isMonotone = (arr) => {
	return (
		arr.map((v, i, a) => (i === 0 ? true : v >= a[i - 1])).filter(Boolean)
			.length === arr.length
	);
};
