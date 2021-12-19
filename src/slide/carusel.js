(function () {
  function createCarusel() {

    let el = document.querySelector(".carusel");
    let line = el.dataset.showSliderLine;
    let slideShow = el.dataset.buttonSliderShow;
    let prevNext = el.dataset.prevNext;
    let imgList = el.querySelectorAll("img");
    let arr = [];
    let i = 0;
    imgList.forEach((elem) => {
      arr.push(elem.outerHTML);
    });
    let imgListArr = arr.map((el) => {
      let q = el.match(/src="(.*[(\.jpg)+(\.png)+])"/);
      return q[1];
    });
    if (prevNext === "on") {
      let prev = document.createElement("span");
      let next = document.createElement("span");
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
      let imageSpanRow = document.createElement("div");
      imageSpanRow.id = "spanCont";
      imgList.forEach((elem, index) => {
        let item = document.createElement("span");
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
      let slide = document.createElement("span");
      slide.classList.add("slidebut");
      slide.innerHTML = "SlideShow";
      slide.addEventListener("click", SlideShow);
      el.appendChild(slide);
    }
    document.querySelectorAll(".item")[i].style.backgroundColor = "#ffffff82";
    imgList[i].style.display = "block";
    el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;

    function nextB() {
      if (i + 1 > imgList.length - 1) {
        imgList[i].style.display = "none";
        i = 0;
        imgList[i].style.display = "block";
        el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;
      }
      else {
        imgList[i].style.display = "none";
        i++;
        imgList[i].style.display = "block";
        el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;
      }
    }
    function prevB() {
      if (i - 1 < 0) {
        imgList[i].style.display = "none";
        i = imgList.length - 1;
        imgList[i].style.display = "block";
        el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;
      }
      else {
        imgList[i].style.display = "none";
        i--;
        imgList[i].style.display = "block";
        el.style.background = `url("${imgListArr[i]}") 0% 0% / 100% 100% no-repeat, rgba(255, 255, 255, 0.5)`;
      }
    }
    let intervalID;
    function SlideShow() {
      if (!intervalID) {
        intervalID = setInterval(nextB, 2000);
      }
      else {
        clearInterval(intervalID);
        intervalID = null;
      }
    }
  }

  window.addEventListener("load", createCarusel);
})();

