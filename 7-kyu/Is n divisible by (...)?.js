function isDivisible() {
	const arr = [...arguments];
	const n = arr[0];
	const els = arr.slice(1);

	return els.every((el) => n % el === 0);
}
