function solution(str, ending) {
	return (
		str.lastIndexOf(ending) != -1 &&
		str.lastIndexOf(ending) === str.length - ending.length
	);
}
