function upArray(arr) {
	const verifyArr = arr.filter((number) => number >= 0 && number < 10);

	if (arr.length !== verifyArr.length || arr.length === 0) return null;

	let i = arr.length - 1;

	while (i >= 0 && arr[i] == 9) arr[i--] = 0;

	if (i < 0) arr.unshift(1);
	else arr[i]++;

	return arr;
}
