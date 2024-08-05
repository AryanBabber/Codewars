function streetFighterSelection(fighters, position, moves) {
	let arr = [];
	let y = position[0];
	let x = position[1];
	for (let i = 0; i < moves.length; i++) {
		if (moves[i] === "left") {
			x--;
			if (x < 0) {
				x = 5;
			}
			arr.push(fighters[y][x]);
		}
		if (moves[i] === "right") {
			x++;
			if (x > 5) {
				x = 0;
			}
			arr.push(fighters[y][x]);
		}
		if (moves[i] === "up") {
			y++;
			if (y > 0) {
				y = 0;
			}
			arr.push(fighters[y][x]);
		}
		if (moves[i] === "down") {
			y--;
			if (y < 1) {
				y = 1;
			}
			arr.push(fighters[y][x]);
		}
	}
	return arr;
}
