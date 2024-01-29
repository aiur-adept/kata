function deleteNth(arr,n){
  let occ = {};
  let seq = [];
  for (let i = 0; i < arr.length; i++) {
    occ[arr[i]] = (occ[arr[i]] || 0) + 1;
    if (occ[arr[i]] <= n) {
      seq.push(arr[i]);
    }
  }
  return seq;
}
