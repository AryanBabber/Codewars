function flickSwitch(arr) {
	let flag = true;
	return arr.map((v) => (v == "flick" ? (flag = !flag) : flag));
}
