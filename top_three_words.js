function topThreeWords(text) {
    let occ = {};
    for (let s of text.trim().split(/[^a-zA-Z']/)) {
        if (s === '' || s === "'") {
            continue;
        }
        s = s.toLowerCase();
        occ[s] = (occ[s] || 0) + 1;
    }
    let arr = [];
    for (let k in occ) {
        arr.push({s: k, n: occ[k]});
    }
    arr.sort((a, b) => b.n - a.n);
    let sol = arr.slice(0, 3).map((x) => x.s);
    return sol;
}

/*
const text = `In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`
*/

/*
const text = "  //wont won't won't ";
*/

const text = ' \' ';
console.log(JSON.stringify(topThreeWords(text), undefined, 2));