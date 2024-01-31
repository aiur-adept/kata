function generatePermutations(input) {
  const result = [];

  function permute(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const newCurrent = current + remaining[i];
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      permute(newCurrent, newRemaining);
    }
  }

  permute('', input);

  return result;
}

function permutations(string) {
	let set = new Set();
  let list = generatePermutations(string);
  for (s of list) {
    set.add(s);
  }
  return Array.from(set);
}
