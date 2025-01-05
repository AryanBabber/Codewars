function createMessage(str) {
	return (str1) => {
		if (str1 === undefined) return str;
		return createMessage(str + " " + str1);
	};
}
