function solve(a) {
	a = a.filter((v) => typeof v == "number");
	let odd = a.filter((n) => n % 2 === 1);
	let even = a.filter((n) => n % 2 === 0);

	return even.length - odd.length;
}
