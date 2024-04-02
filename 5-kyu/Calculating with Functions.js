function zero(a) {
	return a ? a(0) : 0;
}

function one(a) {
	return a ? a(1) : 1;
}

function two(a) {
	return a ? a(2) : 2;
}

function three(a) {
	return a ? a(3) : 3;
}

function four(a) {
	return a ? a(4) : 4;
}

function five(a) {
	return a ? a(5) : 5;
}

function six(a) {
	return a ? a(6) : 6;
}

function seven(a) {
	return a ? a(7) : 7;
}

function eight(a) {
	return a ? a(8) : 8;
}

function nine(a) {
	return a ? a(9) : 9;
}

function plus(b) {
	return (a) => a + b;
}

function minus(b) {
	return (a) => a - b;
}

function times(b) {
	return (a) => a * b;
}

function dividedBy(b) {
	return (a) => Math.floor(a / b);
}
