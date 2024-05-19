function betterThanAverage(classPoints, yourPoints) {
	return (
		(classPoints.reduce((a, b) => a + b, 0) + yourPoints) /
			(classPoints.length + 1) <=
		yourPoints
	);
}
