function ghostBusters(building) {
	let ans = building.split(" ").join("");
	return ans == building ? "You just wanted my autograph didn't you?" : ans;
}
