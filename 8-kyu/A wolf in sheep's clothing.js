function warnTheSheep(queue) {
	let n = queue.reverse().indexOf("wolf");

	return n === 0
		? "Pls go away and stop eating my sheep"
		: `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`;
}
