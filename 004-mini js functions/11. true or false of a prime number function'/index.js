function primeNumber(num1) {
  let c = 0;
  for (let j = 1; j <= num1; j++) {
    if (num1 % j === 0) {
      c = c + 1;
    }
  }
  if (c === 2) {
    return true;
  } else {
    return false;
  }
}
num1 = +prompt("enter num1");
console.log(primeNumber(num1));
