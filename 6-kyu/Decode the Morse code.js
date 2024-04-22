const decodeMorse = (morseCode) =>
	morseCode
		.split(" ")
		.map((v, i) => (MORSE_CODE[v] != undefined ? MORSE_CODE[v] : 1))
		.join("")
		.replace(/11/g, " ")
		.replace(/1/g, " ")
		.trim();
