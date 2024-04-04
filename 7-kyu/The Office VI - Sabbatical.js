function sabb(x, val, happ) {
	x = (x.match(/[sabticl]/gi) || []).length;
	return x + val + happ > 22
		? "Sabbatical! Boom!"
		: "Back to your desk, boy.";
}
