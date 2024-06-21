function getGrade(s1, s2, s3) {
	// Code here
	let avg = [...arguments].reduce((a, b) => a + b, 0) / [...arguments].length;
	return avg < 60
		? "F"
		: avg < 70
		? "D"
		: avg < 80
		? "C"
		: avg < 90
		? "B"
		: "A";
}
