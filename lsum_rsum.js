function findEvenIndex(arr)
{
  for (let i = 1; i < arr.length; i++) {
    let lsum = 0, rsum = 0;
    for (let j = 0; j < i; j++) {
      lsum += arr[j];
    }
    for (let j = i + 1; j < arr.length; j++) {
      rsum += arr[j];
    }
    console.log(lsum, rsum);
    if (lsum == rsum) {
      return i;
    }
  }
  return -1;
}

const data = [1, 2, 3, 4, 3, 2, 1];
// should output 3
console.log(findEvenIndex(data));
