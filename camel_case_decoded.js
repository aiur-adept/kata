function upperCaseIndexes(string) {
  let ixes = [0];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      ixes.push(i);	
    }
  }
  return ixes;
}

function solution(string) {
  let ixes = upperCaseIndexes(string);
  let seq = [];
  for (let i = 0; i < ixes.length; i++) {
    let end = undefined;
    if (i + 1 < ixes.length) {
      end = ixes[i + 1];
    } else {
      end = string.length;
    }
    seq.push(string.slice(ixes[i], end));
  }
  return seq.join(' ');
}

console.log(solution('camelCase'));
console.log(solution('camelCaseHello'));
