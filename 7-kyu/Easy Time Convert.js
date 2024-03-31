function timeConvert(num) {
	let h = Math.floor(num / 60);
	h = h > 9 ? h : "0" + h;
	let m = num % 60;
	m = m > 9 ? m : "0" + m;

	return num <= 0 ? "00:00" : h + ":" + m;
}
