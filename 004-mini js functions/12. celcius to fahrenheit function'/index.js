function fahrenheit(num1) {
  let celsius = (num1 - 32) / 1.8;
  return celsius + "F";
}
num1 = +prompt("enter num1");
console.log(fahrenheit(num1));
