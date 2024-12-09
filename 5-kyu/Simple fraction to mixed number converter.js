function mixedFraction(s) {
	let [n1, n2] = s.split`/`;
	n1 = Number(n1);
	n2 = Number(n2);
	if (n2 === 0) throw Error(`Divisor 0`);
	if (n1 === 0) return "0";
	let n3 = ~~(n1 / n2);
	if (n1 % n2 === 0) return n3.toString();
	let d = gcd(n1, n2);
	n1 = (n1 - n3 * n2) / d;
	n2 = n2 / d;
	if ((n1 < 0 && n2 < 0) || n3 < 0) {
		n1 = Math.abs(n1);
		n2 = Math.abs(n2);
	}
	if (n1 > 0 && n2 < 0) {
		n1 = n1 * -1;
		n2 = Math.abs(n2);
	}
	if (n3 === 0) return `${n1}/${n2}`;
	return `${n3} ${n1}/${n2}`;
}

const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
