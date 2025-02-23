function fizzBuzzCuckooClock(time) {
	let [h, m] = time.split(":").map((v) => parseInt(v));

	h = h === 0 ? 12 : h > 12 ? h - 12 : h;
	if (m === 0) return "Cuckoo ".repeat(h).trim();
	if (m === 30) return "Cuckoo";
	if (m % 3 === 0) {
		if (m % 5 === 0) return "Fizz Buzz";
		return "Fizz";
	}
	if (m % 5 === 0) return "Buzz";
	return "tick";
}
