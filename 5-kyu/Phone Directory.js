function phone(str, num) {
	let arr = str.split`\n`.map((v) => {
		let a = [];
		let regNumber = /\d+\-\d+\-\d+\-\d+/;
		let regName = /<.+>/;
		v = v.replace(regNumber, (x) => {
			a.push(x);
			return "";
		});
		v = v.replace(regName, (x) => {
			a.push(x.slice(1, -1));
			return "";
		});
		v.replace(/.+/g, (x) => {
			a.push(
				x
					.replace(/[^0-9a-zA-Z\.\-\s_]/g, "")
					.replace(/\s+|_/g, " ")
					.trim()
			);
			return "";
		});
		return a;
	});
	let check = arr.filter((v) => v[0] === num);
	if (check.length === 0) return `Error => Not found: ${num}`;
	if (check.length > 1) return `Error => Too many people: ${num}`;
	check = check[0];
	return `Phone => ${check[0]}, Name => ${check[1]}, Address => ${check[2]}`;
}
