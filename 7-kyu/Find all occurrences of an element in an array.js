const findAll = (array, n) => {
	return array.map((v, i) => (v === n ? i : false)).filter(v => v !== false);
};
