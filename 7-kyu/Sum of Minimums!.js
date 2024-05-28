function sumOfMinimums(arr) {
	// simple approach would be:
	// return arr.map(a => Math.min(...a)).reduce((a,b) => a+b, 0);

	// lets make it complicated
    let sum = 0;
    for(let array of arr) {
        let min = array[0];
        for(let numbers of array) {
            min = Math.min(min, numbers);
        }
        sum += min;
    }

    return sum;
}
