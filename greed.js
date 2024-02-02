function runLength(xs, ix) {
  const x = xs[ix];
  let n = 0;
  for (let i = ix; i < xs.length; i++) {
    if (xs[i] != x) {
      break;
    }
    n++;
  }
  return n;
}

function containsRun(xs, x, n) {
  let ix = xs.findIndex((y) => y === x);
  if (ix === undefined) {
    return false;
  }
  return runLength(xs, ix) === n;
}

function removeRun(xs, x, n) {
  let ix = xs.findIndex((y) => y === x);
  let remaining = xs.slice(0, ix).concat(xs.slice(ix + n));
  return remaining;
}

function score( dice ) {
  dice = dice.sort((a, b) => a - b);
  let score = 0;
  if (containsRun(dice, 1, 3)) {
    score += 1000;
    dice = removeRun(dice, 1, 3);
  }
  for (let i = 1; i <= 6; i++) {
    if (containsRun(dice, i, 2)) {
      score += 100 * i;
      dice = removeRun(dice, i, 2);
    }
  }
  return score;
}

const dice = [5, 1, 3, 5, 1, 1];
console.log(score(dice));

