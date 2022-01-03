let firsttry;
let secondtry;
let firstbtn;
let secondbtn;
let louder = false;

export default function clickOnElmentF(button) {
  if (!louder) {
    if (firsttry) {
      button.classList.remove("temp1");
      secondtry = button.style.backgroundColor;
      secondbtn = button;

      if (firsttry === secondtry && !(firstbtn === secondbtn)) {
        firstbtn.classList.add("animate__rollOut");
        secondbtn.classList.add("animate__rollOut");
        firsttry = "";
        secondtry = "";
        louder = true;

        setTimeout(() => {
          firstbtn.style.visibility = "hidden";
          secondbtn.style.visibility = "hidden";
          louder = false;
          firstbtn.classList.remove("animate__rollOut");
          secondbtn.classList.remove("animate__rollOut");
        }, 1200);
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
      firsttry = button.style.backgroundColor;
      button.classList.remove("temp1");
      firstbtn = button;
    }
  }
}
