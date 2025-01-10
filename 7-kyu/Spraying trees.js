function task(w, n, c) {
	let map = {
		Monday: "James",
		Tuesday: "John",
		Wednesday: "Robert",
		Thursday: "Michael",
		Friday: "William",
	};

	return `It is ${w} today, ${
		map[w]
	}, you have to work, you must spray ${n} trees and you need ${
		c * n
	} dollars to buy liquid`;
}
