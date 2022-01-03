let firsttry;
let secondtry;
let firstbtn;
let secondbtn;
let louder = false;

export default function clickOnDinoElmentF(button, aramanim) {
  if (!louder) {
    if (firsttry) {
      secondtry = [...button.classList];
      button.classList.remove("temp1");
      secondbtn = button;

      if (firsttry[1] === secondtry[1] && !(firstbtn === secondbtn)) {
        firstbtn.classList.add(aramanim[1]);
        secondbtn.classList.add(aramanim[2]);
        firsttry = "";
        secondtry = "";
        louder = true;
        setTimeout(() => {
          firstbtn.classList.remove(aramanim[1]);
          secondbtn.classList.remove(aramanim[2]);
          firstbtn.style.visibility = "hidden";
          secondbtn.style.visibility = "hidden";
          louder = false;
        }, 1000);
      } else {
        firsttry = "";
        secondtry = "";
        louder = true;
        setTimeout(() => {
          firstbtn.classList.add("temp1");
          secondbtn.classList.add("temp1");
          louder = false;
        }, 1000);
      }
    } else {
      firsttry = [...button.classList];
      button.classList.remove("temp1");
      firstbtn = button;
    }
  }
}
