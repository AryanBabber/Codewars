function solution(pairs) {
	let k = Object.keys(pairs);
	let v = Object.values(pairs);
	return k.map((c, i) => `${c} = ${v[i]}`).join(",");
}
