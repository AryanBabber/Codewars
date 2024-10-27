const circleArea = (radius) => {
	if (radius <= 0 || typeof radius !== "number") throw Error();
	return +(Math.PI * radius * radius).toFixed(2);
};
