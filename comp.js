function comp(xs, ys) {
    for (let i = 0; i < ys.length; i++) {
        if (!xs.includes(Math.sqrt(ys[i]))) {
            return false;
        }
    }
    return true;
}

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

console.log(comp(a, b));

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

console.log(comp(a, b));

a = [2, 2, 3];
b = [4, 9, 9];

console.log(comp(a, b));