function checkThreeAndTwo(array) {
	let obj = {};

	array.map((v) => (obj[v] ? obj[v]++ : (obj[v] = 1)));

	let res = Object.values(obj);
	return res.includes(2) && res.includes(3);
}
