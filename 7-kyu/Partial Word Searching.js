function wordSearch(query, seq) {
	let ans = seq.filter((p) => p.toLowerCase().includes(query.toLowerCase()));
	return ans.length ? ans : ["Empty"];
}
