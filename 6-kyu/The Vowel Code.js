let vowels = ["a", "e", "i", "o", "u"];

function encode(string) {
	return string.replace(
		/[aeiou]/gi,
		(v) => vowels.indexOf(v.toLowerCase()) + 1
	);
}

function decode(string) {
	return string.replace(/[1-5]/g, (v) => vowels[v - 1]);
}
