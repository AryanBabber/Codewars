function well(x) {
	const isAnyGood = x
		.flat()
		.filter((v) => String(v).toLowerCase() == "good").length;
	return isAnyGood == 0
		? "Fail!"
		: isAnyGood < 3
		? "Publish!"
		: "I smell a series!";
}
