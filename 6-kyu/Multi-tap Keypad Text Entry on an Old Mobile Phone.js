function presses(s) {
	var s1 = "1*# ADGJMPTW0BEHKNQUXCFILORVY23456S8Z79",
		s2 = "111111111111222222222333333334444444455";
	return [...s.toUpperCase()].reduce((a, b) => a + +s2[s1.indexOf(b)], 0);
}
