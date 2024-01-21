function oddOrEven(array) {
   let sum = array.reduce((x, acc) => x + acc, 0);
   return (sum % 2 == 0) ? "even" : "odd";
}

console.log(oddOrEven([1,1,1]));
