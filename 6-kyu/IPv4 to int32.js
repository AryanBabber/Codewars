function ipToInt32(ip) {
	return ip.split(".").reduce((int, v) => int * 256 + +v);
}
