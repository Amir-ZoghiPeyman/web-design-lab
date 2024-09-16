const num = Math.floor(Math.random() * 101);
console.log(num);
if (num >= 0 && num < 50) {
  document.body.style.backgroundColor = "red";
} else if (num >= 50 && num < 80) {
  document.body.style.backgroundColor = "green";
} else {
  document.body.style.backgroundColor = "blue";
}
