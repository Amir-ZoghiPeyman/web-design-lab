// DOM NODES
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

let rotateVal = 0;

function handleClick() {
  rotateVal += 180;
  container.style = `rotate: ${rotateVal}deg`;
}

btn.addEventListener("click", handleClick);
