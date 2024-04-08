function isValidWalk(walk) {
	let x = 0;
    let y = 0;

    for(let dir of walk) {
        switch(dir) {
            case 'n':
                y++;
                break;
            case 's':
                y--;
                break;
            case 'e':
                x++;
                break;
            case 'w':
                x--;
                break;
        }
    }

    return x == 0 && y == 0 && walk.length == 10;
}
