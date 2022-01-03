// import { clickOnElment } from "./leo";
import { shuffle } from "./shuffle";

let louder = false;
export function startF(aramColor, listOfColorElements) {
  if (!louder) {
    louder = true;
    shuffle(aramColor);
    listOfColorElements.forEach((item) => {
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
      item.classList.remove("temp1");
      item.style.display = "inline-block";
      item.style.visibility = "visible";
      item.style.backgroundImage = "";
      item.onclick = function () {
        // eslint-disable-next-line no-undef
        clickOnElment(this);
      };
    });

    listOfColorElements.forEach((item) => {
      item.style.backgroundColor = aramColor[listOfColorElements.indexOf(item)];
      item.style.transition = "all 1s";
      setTimeout(() => {
        item.classList.add("temp1");
        item.style.transition = "";
        louder = false;
      }, 3000);
    });
  }
}
