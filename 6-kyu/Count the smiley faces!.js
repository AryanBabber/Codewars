//return the total number of smiling faces in the array
function countSmileys(arr) {
	return arr.filter(isValidSmiley).length;
}

const isValidSmiley = (smile) => {
	return /(:|;)(-|~)?(\)|D)/.test(smile);
};
