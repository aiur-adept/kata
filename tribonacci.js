function tribonacci(signature,n){
  if (n == 0) {
    return [];
  }
  if (n < 3) {
    return signature.slice(0, n);
  }
  let list = Array.from(signature);
  for (let i = 0; i < n - 3; i++) {
    list.push(list[i] + list[i + 1] + list[i + 2]);
  }
  return list;
}

console.log(tribonacci([1, 1, 1], 5));
