function duplicateEncode(word) {
  word = word.toLowerCase();
  let occ = {};
  for (let i = 0; i < word.length; i++) {
    occ[word[i]] = (occ[word[i]] || 0) + 1;
  }
  let s = '';
  for (let i = 0; i < word.length; i++) {
    s += occ[word[i]] > 1 ? ')' : '(';
  }
  return s;
}

console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
