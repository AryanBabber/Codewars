const completeSeries = (arr) => {
	if ([...new Set(arr)].length !== arr.length) return [0];
	let arr1 = [];
	arr = arr.sort((a, b) => a - b);
	for (let i = 0; i <= arr[arr.length - 1]; i++) arr1.push(i);
	return arr1;
};
