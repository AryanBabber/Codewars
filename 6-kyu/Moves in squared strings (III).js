function rot90Clock(str1) {
	let arr = str1.split`\n`;
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		let str = "";
		for (let j = arr.length - 1; j >= 0; j--) {
			str += arr[j][i];
		}
		arr2.push(str);
	}
	return arr2.join`\n`;
}

function diag1Sym(str1) {
	let arr = str1.split`\n`;
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		let str = "";
		for (let j = 0; j < arr.length; j++) {
			str += arr[j][i];
		}
		arr2.push(str);
	}
	return arr2.join`\n`;
}

function selfieAndDiag1(str1) {
	let arr = str1.split`\n`;
	let arr2 = [];
	for (let i = 0; i < arr.length; i++) {
		let str = "";
		for (let j = 0; j < arr.length; j++) {
			str += arr[j][i];
		}
		arr2.push(arr[i] + "|" + str);
	}
	return arr2.join`\n`;
}

function oper(fct, s) {
	return fct(s);
}
