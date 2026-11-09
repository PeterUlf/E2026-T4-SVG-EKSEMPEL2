const kort = document.querySelector(".svg-kort");

document
  .querySelector("#details-indgang")
  .addEventListener("toggle", opdaterFigur);
document
  .querySelector("#details-scene")
  .addEventListener("toggle", opdaterFigur);
document
  .querySelector("#details-cafe")
  .addEventListener("toggle", opdaterFigur);

function opdaterFigur() {
  const aabent = document.querySelector(".accordion-item[open]");
  if (aabent) {
    kort.dataset.position = aabent.dataset.position;
    document.querySelector("#besked").textContent =
      "Valgt sted: " + aabent.querySelector("summary").textContent;
  } else {
    kort.dataset.position = "indgang";
    document.querySelector("#besked").textContent =
      "Alt er lukket. Figuren står ved indgangen.";
  }
}

opdaterFigur();
