const number = (stops) => {
	let ans = 0;
	stops.map((v) => (ans = ans + v[0] - v[1]));
	return ans;
};
