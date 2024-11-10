function killer(suspectInfo, dead) {
	for (let i in suspectInfo) {
		let temp = suspectInfo[i].filter((v) => dead.includes(v));
		if (temp.length === dead.length) {
			return i;
		}
	}
}
