const reverse = (array) => {
	let ans = [];
	while (array.length > 0) {
		ans.push(array.pop());
	}

	return ans;
};
