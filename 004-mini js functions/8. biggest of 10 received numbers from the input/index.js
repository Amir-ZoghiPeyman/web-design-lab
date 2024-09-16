function biggerNumber(
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
  if (
    num1 > num2 &&
    num1 > num3 &&
    num1 > num4 &&
    num1 > num5 &&
    num1 > num6 &&
    num1 > num7 &&
    num1 > num8 &&
    num1 > num9 &&
    num1 > num10
  ) {
    return num1;
  } else if (
    num2 > num1 &&
    num2 > num3 &&
    num2 > num4 &&
    num2 > num5 &&
    num2 > num6 &&
    num2 > num7 &&
    num2 > num8 &&
    num2 > num9 &&
    num2 > num10
  ) {
    return num2;
  } else if (
    num3 > num1 &&
    num3 > num2 &&
    num3 > num4 &&
    num3 > num5 &&
    num3 > num6 &&
    num3 > num7 &&
    num3 > num8 &&
    num3 > num9 &&
    num3 > num10
  ) {
    return num3;
  } else if (
    num4 > num1 &&
    num4 > num3 &&
    num4 > num2 &&
    num4 > num5 &&
    num4 > num6 &&
    num4 > num7 &&
    num4 > num8 &&
    num4 > num9 &&
    num4 > num10
  ) {
    return num4;
  } else if (
    num5 > num1 &&
    num5 > num3 &&
    num5 > num4 &&
    num5 > num2 &&
    num5 > num6 &&
    num5 > num7 &&
    num5 > num8 &&
    num5 > num9 &&
    num5 > num10
  ) {
    return num5;
  } else if (
    num6 > num1 &&
    num6 > num3 &&
    num6 > num4 &&
    num6 > num5 &&
    num6 > num2 &&
    num6 > num7 &&
    num6 > num8 &&
    num6 > num9 &&
    num6 > num10
  ) {
    return num6;
  } else if (
    num7 > num1 &&
    num7 > num3 &&
    num7 > num4 &&
    num7 > num5 &&
    num7 > num6 &&
    num7 > num2 &&
    num7 > num8 &&
    num7 > num9 &&
    num7 > num10
  ) {
    return num7;
  } else if (
    num8 > num1 &&
    num8 > num3 &&
    num8 > num4 &&
    num8 > num5 &&
    num8 > num6 &&
    num8 > num7 &&
    num8 > num2 &&
    num8 > num9 &&
    num8 > num10
  ) {
    return num8;
  } else if (
    num9 > num1 &&
    num9 > num3 &&
    num9 > num4 &&
    num9 > num5 &&
    num9 > num6 &&
    num9 > num7 &&
    num9 > num8 &&
    num9 > num2 &&
    num9 > num10
  ) {
    return num9;
  } else if (
    num10 > num1 &&
    num10 > num3 &&
    num10 > num4 &&
    num10 > num5 &&
    num10 > num6 &&
    num10 > num7 &&
    num10 > num8 &&
    num10 > num9 &&
    num10 > num2
  ) {
    return num10;
  }
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
  biggerNumber(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10)
);
