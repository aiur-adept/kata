function digits(x) {
    let seq = [];
    while (x != 0) {
        seq.unshift(x % 10);
        x = Math.floor(x/10);
    }
    return seq;
}

function persistence(num) {
    let n = 0;
    let x = num;
    while (x >= 10) {
        let seq = digits(x);
        x = seq.reduce((v, acc) => v * acc, 1);
        n++;
    }
    return n;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));

