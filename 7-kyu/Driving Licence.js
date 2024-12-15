function driver([first, mid, last, b, gender]) {
	let p1 = last.padEnd(5, 9).toUpperCase().slice(0, 5);
	let dec = b[b.length - 2];
	let mon = `0${
		new Date(b).getMonth() + 1 + (gender === "F" ? 50 : 0)
	}`.slice(-2);
	let year = b[b.length - 1],
		date = b.slice(0, 2);
	let init = `${first[0] || ""}${mid[0] || ""}99`.slice(0, 2);
	let arb = "9",
		check = "AA";
	return `${p1}${dec}${mon}${date}${year}${init}${arb}${check}`;
}
