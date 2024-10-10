function flyBy(lamps, drone) {
	return (
		"o".repeat(Math.min(drone.length, lamps.length)) +
		lamps.slice(drone.length)
	);
}
