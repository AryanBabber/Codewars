function group(arr) {
    return [...new Set(arr)].map(n => arr.filter(x => x == n));
}