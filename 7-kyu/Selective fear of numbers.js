const AmIAfraid = (day, num) => {
	switch (day.toLowerCase()) {
		case "monday":
			return num === 12;
		case "tuesday":
			return num > 95;
		case "wednesday":
			return num === 34;
		case "thursday":
			return num === 0;
		case "friday":
			return num % 2 === 0;
		case "saturday":
			return num === 56;
		case "sunday":
			return Math.abs(num) === 666;
	}
};
