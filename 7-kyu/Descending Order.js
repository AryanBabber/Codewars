function descendingOrder(n){
    return +(String(n).split('').map(a => +a).sort((a,b) => b-a).join(''))
}