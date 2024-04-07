function reverseWords(str) {
	return str
		.split(" ")
		.map((s) => s.split("").reverse().join(""))
		.join(" ");
}

console.log(reverseWords("This is an example"));
console.log(reverseWords("This  is  an  example"));
