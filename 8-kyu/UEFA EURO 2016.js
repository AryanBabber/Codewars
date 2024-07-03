function uefaEuro2016(teams, scores) {
	// your code...
	let [team1, team2] = teams;
	let winner = "";
	if (scores[0] > scores[1]) {
		winner = team1;
	} else if (scores[0] < scores[1]) {
		winner = team2;
	}

	return `At match ${team1} - ${team2}, ${
		!winner ? "teams played draw." : `${winner} won!`
	}`;
}
