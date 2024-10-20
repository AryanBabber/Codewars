const whosOnline = (friends) => {
	const online = [];
	const offline = [];
	const away = [];
	friends.map((v) =>
		v.status === "online" && v.lastActivity < 11
			? online.push(v.username)
			: v.status === "offline"
			? offline.push(v.username)
			: away.push(v.username)
	);
	if (online.length > 0 && offline.length > 0 && away.length > 0)
		return { online, offline, away };
	if (online.length > 0 && away.length > 0) return { online, away };
	if (online.length > 0 && offline.length > 0) return { online, offline };
	if (offline.length > 0 && away.length > 0) return { offline, away };
	return {};
};
