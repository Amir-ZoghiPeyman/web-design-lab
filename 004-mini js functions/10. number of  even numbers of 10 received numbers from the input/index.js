function numberOfEven(
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8,
  num9,
  num10
) {
  debugger;
  let even = 0;
  if (num1 % 2 === 0) {
    even++;
  } else if (num2 % 2 === 0) {
    even++;
  } else if (num3 % 2 === 0) {
    even++;
  } else if (num4 % 2 === 0) {
    even++;
  } else if (num5 % 2 === 0) {
    even++;
  } else if (num6 % 2 === 0) {
    even++;
  } else if (num7 % 2 === 0) {
    even++;
  } else if (num8 % 2 === 0) {
    even++;
  } else if (num9 % 2 === 0) {
    even++;
  } else if (num10 % 2 === 0) {
    even++;
  }
  return even;
}
num1 = +prompt("enter num1");
num2 = +prompt("enter num2");
num3 = +prompt("enter num3");
num4 = +prompt("enter num4");
num5 = +prompt("enter num5");
num6 = +prompt("enter num6");
num7 = +prompt("enter num7");
num8 = +prompt("enter num8");
num9 = +prompt("enter num9");
num10 = +prompt("enter num10");
console.log(
  numberOfEven(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10)
);
