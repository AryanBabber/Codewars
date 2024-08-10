function divCon(x) {
	//     if(x.length == 0) return 0;
	let nums = x.filter((v) => typeof v == "number").reduce((a, b) => a + b, 0);
	let strs = x
		.filter((v) => typeof v !== "number")
		.reduce((a, b) => a + +b, 0);

	return nums - strs;
}
