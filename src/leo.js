import makeLayout from "./memo1eo_app/leoLayout";
import { shuffle } from "./memo1eo_app/shuffle";
import clickOnElmentF from "./memo1eo_app/clickOnElmentF";
import { startF } from "./memo1eo_app/startF";
import { dinoF } from "./memo1eo_app/dinoF";
import clickOnDinoElmentF from "./memo1eo_app/clickOnDinoElmentF";
import "./sassStyles/leo.scss";

const body = document.querySelector("body");
makeLayout(body);

const containerForColorElements = document.getElementById("maindiv");

let listOfColorElements =
  containerForColorElements.getElementsByClassName("buttons");

const aramColor = [
  "coral",
  "blue",
  "yellow",
  "green",
  "grey",
  "AntiqueWhite",
  "coral",
  "blue",
  "yellow",
  "green",
  "grey",
  "AntiqueWhite",
];
shuffle(aramColor);

listOfColorElements = [...listOfColorElements];

listOfColorElements.forEach((item) => {
  item.style.backgroundColor = aramColor[listOfColorElements.indexOf(item)];
  item.style.transition = "all 1s";
  setTimeout(() => {
    item.classList.add("temp1");
    item.style.transition = "";
  }, 2458);
});

const aramanim = [
  "animate__fadeOutUp",
  "animate__fadeOutTopLeft",
  "animate__fadeOutTopRight",
  "animate__fadeOutBottomRight",
  "animate__fadeOutBottomLeft",
];
startF(aramColor, listOfColorElements);

export function clickOnElment(button) {
  clickOnElmentF(button);
}
export function start() {
  startF(aramColor, listOfColorElements);
}
export function dino() {
  dinoF(listOfColorElements);
}

export function clickOnDinoElment(button) {
  shuffle(aramanim);
  clickOnDinoElmentF(button, aramanim);
}

window.clickOnElment = clickOnElment;
window.dino = dino;
window.start = start;
window.clickOnDinoElment = clickOnDinoElment;
