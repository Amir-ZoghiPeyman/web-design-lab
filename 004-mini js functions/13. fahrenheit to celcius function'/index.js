function celsius(num1) {
  let fahrenheit = 1.8 * num1 + 32;
  return fahrenheit + "C";
}
num1 = +prompt("enter num1");
console.log(celsius(num1));
