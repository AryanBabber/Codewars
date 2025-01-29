var Calculator = {
	average: function () {
		let argsArr = [...arguments];

		return argsArr.reduce((a, b) => a + b, 0) / Math.max(argsArr.length, 1);
	},
};
