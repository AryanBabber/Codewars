function duckDuckGoose(players, goose) {
	return players[(goose - 1) % players.length].name;
}
