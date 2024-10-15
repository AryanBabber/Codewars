function insertDash(num) {
	return String(num).split("").map(c => Number(c) % 2 === 1 ? c + " " : c).join("").trim()
}
