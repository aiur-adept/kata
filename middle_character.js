function getMiddle(s)
{
  let middle = s[Math.floor((s.length - 1) / 2)];
  if (s.length % 2 == 0) {
    middle += s[Math.ceil(s.length/2)];
  }
  return middle;
}

console.log(getMiddle("test"));
console.log(getMiddle("tst"));
console.log(getMiddle("aaaabaaaa"));
