// DOM NODES
const mainImage = document.getElementById("main-image");
const thombImages = document.querySelectorAll(".thomb");

function clickHandler(evt) {
  const selectedImageSource = evt.target.getAttribute("src");
  mainImage.setAttribute("src", selectedImageSource);

  for (const thomb of thombImages) {
    thomb.classList.remove("selected");
  }

  evt.target.classList.add("selected");
}

// EVENTS
for (const thomb of thombImages) {
  thomb.onclick = clickHandler;
}
