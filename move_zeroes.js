function moveZeros(arr) {
  let nZeroes = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      nZeroes++;
    } else {
      res.push(arr[i])
    }
  }
  for (let i = 0; i < nZeroes; i++) {
    res.push(0);
  }
  return res;
}
