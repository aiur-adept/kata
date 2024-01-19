

function findOutlier(integers){
  let lastOddIx = -1;
  let lastEvenIx = -1;
  let oddCount = 0;
  let evenCount = 0;
  for (let ix = 0; ix < integers.length; ix++) {
    if(integers[ix] % 2 == 0) {
      lastEvenIx = ix;
      evenCount++;
    } else {
      lastOddIx = ix;
      oddCount++;
    }
    if (lastOddIx != -1 && lastEvenIx != -1) {
      if (oddCount > 1) {
        return integers[lastEvenIx];
      } else if (evenCount > 1) {
        return integers[lastOddIx];
      }
    }
  }
}

const data = [ 1465885,-148789226,22526130,-87218432,-116994908,-143633016,10044222,5174070,141558546,55433558,58880036,146580880,-42735762,159445828];
// should be 1465885
console.log(findOutlier(data));
