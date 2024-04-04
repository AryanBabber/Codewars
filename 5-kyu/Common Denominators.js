const GCD = (a, b) => {
	if (b == 0) return a;
	return GCD(b, a % b);
};

const findLCM = (arr, len) => {
	let ans = arr[0];

	for (let i = 1; i < len; i++) {
		ans = (arr[i] * ans) / GCD(arr[i], ans);
	}

	return ans;
};

function convertFrac(lst) {
	let ds = lst.map((a) => a[1]);
	let lcm = findLCM(ds, ds.length);

	return lst
		.map((a) => "(" + [(a[0] * lcm) / a[1], lcm].toString() + ")")
		.join("");
}
