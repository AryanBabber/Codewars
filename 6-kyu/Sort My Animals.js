function sortAnimal(animal) {
	return [...animal].sort(
		(a, b) =>
			a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
	);
}
