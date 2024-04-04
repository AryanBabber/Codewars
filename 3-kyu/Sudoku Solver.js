const legal = (sol, i, j, val) => {
	for (let c = 0; c < 9; c++) {
		if (sol[i][c] == val) {
			return false;
		}
	}

	for (let c = 0; c < 9; c++) {
		if (sol[c][j] == val) return false;
	}

	let a = Math.floor(i / 3) * 3; // r
	let b = Math.floor(j / 3) * 3; // c

	for (let x = a; x < a + 3; x++) {
		for (let y = b; y < b + 3; y++) {
			if (val === sol[x][y]) return false;
		}
	}

	return true;
};

const sudokuSolver = (sol, i, j) => {
	if (i === 9) {
		i = 0;
		j += 1;
		if (j === 9) return true;
	}

	if (sol[i][j] > 0) return sudokuSolver(sol, i + 1, j);

	for (let a = 1; a <= 9; a++) {
		if (legal(sol, i, j, a)) {
			sol[i][j] = a;
			if (sudokuSolver(sol, i + 1, j)) return true;
		}
	}

	sol[i][j] = 0;
	return false;
};

const sudoku = (puzzle) => {
	let solution = JSON.parse(JSON.stringify(puzzle));
	if (sudokuSolver(solution, 0, 0)) return solution;

	return null;
};
