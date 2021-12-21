import "../sassStyles/dino_image_style.sass";
import "./carusel_style.css";

(function () {
  function createCarusel() {


    const el = document.querySelector(".carusel");
    if (typeof Number(el.dataset.width) === "number") {
      el.style.width = `${el.dataset.width}px`;
      console.log(el.style.width, "kk", el.dataset.width)
    }
    if (typeof Number(el.dataset.height) === "number") {
      el.style.height = `${el.dataset.height}px`;
      console.log(el.style.height, "kk", el.dataset.height)
    }
    const line = el.dataset.showSliderLine;
    const slideShow = el.dataset.buttonSliderShow;
    const { prevNext } = el.dataset;
    const imgList = el.querySelectorAll("img");
    const arr = [];
    let i = 0;
    let intervalID;
    imgList.forEach((elem) => {
      arr.push(elem.outerHTML);
    });
    const imgListArr = arr.map((elArr) => {
      const q = elArr.match(/src="(.*[(\.jpg)+(\.png)+])"/);
      return q[1];
    });
    function nextB() {
      if (i + 1 > imgList.length - 1) {
        if (line === "on") {
          document.querySelectorAll(".item")[i].style.backgroundColor = "#adc5db5c";
        };
        imgList[i].style.display = "none";
        i = 0;
        if (line === "on") {
          document.querySelectorAll(".item")[i].style.backgroundColor = "#f3d59d99";
        };
        imgList[i].style.display = "block";
        el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;
      }
      else {
        if (line === "on") {
          document.querySelectorAll(".item")[i].style.backgroundColor = "#adc5db5c";
        };
        imgList[i].style.display = "none";
        i += 1;
        if (line === "on") {
          document.querySelectorAll(".item")[i].style.backgroundColor = "#f3d59d99";
        };
        imgList[i].style.display = "block";
        el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;
      }
    }
    function prevB() {
      if (i - 1 < 0) {
        if (line === "on") {
          document.querySelectorAll(".item")[i].style.backgroundColor = "#adc5db5c";
        };
        imgList[i].style.display = "none";
        i = imgList.length - 1;
        if (line === "on") {
          document.querySelectorAll(".item")[i].style.backgroundColor = "#f3d59d99";
        };
        imgList[i].style.display = "block";
        el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;
      }
      else {
        if (line === "on") {
          document.querySelectorAll(".item")[i].style.backgroundColor = "#adc5db5c";
        };
        imgList[i].style.display = "none";
        i -= 1;
        if (line === "on") {
          document.querySelectorAll(".item")[i].style.backgroundColor = "#f3d59d99";
        };
        imgList[i].style.display = "block";
        el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;
      }
    }
    if (prevNext === "on") {
      const prev = document.createElement("span");
      const next = document.createElement("span");
      prev.classList.add("slide", "prev");
      next.classList.add("slide", "next");
      prev.innerHTML = "<";
      next.innerHTML = ">";
      next.addEventListener("click", nextB);
      prev.addEventListener("click", prevB);
      el.appendChild(prev);
      el.appendChild(next);
    };

    if (line === "on") {
      const imageSpanRow = document.createElement("div");
      imageSpanRow.id = "s-cont";
      imgList.forEach((elem, index) => {
        const item = document.createElement("span");
        item.style.width = `${90 / imgList.length}%`;
        item.classList.add("item");
        item.dataset.spannumber = index;
        item.addEventListener("click", () => {
          document.querySelectorAll(".item").forEach((spanItem) => {
            spanItem.style.backgroundColor = "#adc5db5c";
          });
          item.style.backgroundColor = "#f3d59d99";
          imgList[i].style.display = "none";
          i = index;
          imgList[i].style.display = "block";

          el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;
        });
        item.innerHTML = "";
        imageSpanRow.appendChild(item);
      });
      el.appendChild(imageSpanRow);
    }
    if (slideShow === "on") {
      const slide = document.createElement("span");
      slide.classList.add("slidebut");

      slide.innerHTML = "SlideShow";
      slide.addEventListener("click", () => {
        slide.classList.toggle("border");

        if (!intervalID) {
          slide.innerHTML = "SlideShow <span>ON</span>";
          intervalID = setInterval(nextB, 2000);
        }
        else {
          slide.innerText = "SlideShow";
          clearInterval(intervalID);
          intervalID = null;
        }
      });
      el.appendChild(slide);
    }
    document.querySelectorAll(".item")[i].style.backgroundColor = "#f3d59d99";
    imgList[i].style.display = "block";
    el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;



  }

  window.addEventListener("load", createCarusel);
})();

