const prevMultOfThree = (n) => {
	let str = n.toString().split("").reverse("").join("");
	for (let i = 0; i < str.length; i++) {
		if ((str.slice(i).split("").reverse("").join("") * 1) % 3 === 0) {
			return str.slice(i).split("").reverse("").join("") * 1;
		}
	}
	return null;
};
