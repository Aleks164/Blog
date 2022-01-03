import { shuffle } from "./shuffle";

let louder = false;
export function dinoF(listOfColorElements) {
  if (!louder) {
    louder = true;
    const aramColor2 = [
      "a1",
      "a2",
      "a3",
      "a4",
      "a5",
      "a6",
      "a1",
      "a2",
      "a3",
      "a4",
      "a5",
      "a6",
    ];
    shuffle(aramColor2);
    listOfColorElements.forEach((item) => {
      item.classList.remove("temp1");
      item.classList.remove(
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6"
      );
      item.classList.remove(
        "animate__fadeOutUp",
        "animate__fadeOutTopLeft",
        "animate__fadeOutTopRight",
        "animate__fadeOutBottomRight",
        "animate__fadeOutBottomLeft"
      );
      item.style.display = "inline-block";
      item.style.visibility = "visible";
      item.onclick = function () {
        // eslint-disable-next-line no-undef
        clickOnDinoElment(this);
      };
    });
    listOfColorElements.forEach((item) => {
      item.classList.add(aramColor2[listOfColorElements.indexOf(item)]);
      item.style.transition = "all 2.5s";
      setTimeout(() => {
        item.style.transition = "";
        // item.style.display = "none";
        item.classList.add("temp1");
        louder = false;
      }, 3000);
    });
  }
}
