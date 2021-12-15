import clickOnDinoElmentF from "./clickOnDinoElmentF";

describe("check click on color element", () => {
  let el;
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const aramanim = [
    "animate__fadeOutUp",
    "animate__fadeOutTopLeft",
    "animate__fadeOutTopRight",
    "animate__fadeOutBottomRight",
    "animate__fadeOutBottomLeft"
  ];

  beforeEach(() => {
    el = document.createElement("div");
    el.innerHTML = `<div onclick="clickOnElment(this)" id="b1" class="buttons a1" style="background-color: blue; display: inline-block; visibility: visible;"></div>
    <div onclick="clickOnElment(this)" id="b2" class="buttons a1" style="background-color: blue; display: inline-block; visibility: visible;"></div>
    <div onclick="clickOnElment(this)" id="b3" class="buttons a2" style="background-color: blue; display: inline-block; visibility: visible;"></div>`;
    document.body.append(el);
  });

  afterEach(() => {
    document.getElementsByTagName("body")[0].innerHTML = "";
  });

  it("should compare two selected images and hide both one if they the same whith animation", async () => {
    function getElem(n) {
      return el.getElementsByClassName("buttons")[n];
    }
    expect(getElem(0).style.visibility).toEqual("visible");
    expect(getElem(1).style.visibility).toEqual("visible");
    clickOnDinoElmentF(getElem(0), aramanim);
    clickOnDinoElmentF(getElem(1), aramanim);
    expect(getElem(0).classList).toStrictEqual(
      expect.objectContaining({ "2": "animate__fadeOutTopLeft" })
    );
    expect(getElem(1).classList).toStrictEqual(
      expect.objectContaining({ "2": "animate__fadeOutTopRight" })
    );
    await sleep(1300);
    expect(getElem(0).style.visibility).toEqual("hidden");
    expect(getElem(0).classList).not.toStrictEqual(
      expect.objectContaining({ "2": "animate__fadeOutTopLeft" })
    );
    expect(getElem(1).style.visibility).toEqual("hidden");
    expect(getElem(1).classList).not.toStrictEqual(
      expect.objectContaining({ "2": "animate__fadeOutTopRight" })
    );
  });
  it("should compare two selected images and refresh both one if they is'nt the same", async () => {
    function getElem(n) {
      return el.getElementsByClassName("buttons")[n];
    }
    expect(getElem(0).style.visibility).toEqual("visible");
    expect(getElem(2).style.visibility).toEqual("visible");
    clickOnDinoElmentF(getElem(0), aramanim);
    clickOnDinoElmentF(getElem(2), aramanim);
    expect(getElem(0).classList).not.toStrictEqual(
      expect.objectContaining({ "2": "temp1" })
    );
    expect(getElem(2).classList).not.toStrictEqual(
      expect.objectContaining({ "2": "temp1" })
    );
    await sleep(1300);
    expect(getElem(0).style.visibility).toEqual("visible");
    expect(getElem(0).classList).toStrictEqual(
      expect.objectContaining({ "2": "temp1" })
    );
    expect(getElem(2).style.visibility).toEqual("visible");
    expect(getElem(2).classList).toStrictEqual(
      expect.objectContaining({ "2": "temp1" })
    );
  });
  it("clicking on itself will not hide the element", async () => {
    function getElem(n) {
      return el.getElementsByClassName("buttons")[n];
    }
    expect(getElem(0).style.visibility).toEqual("visible");
    clickOnDinoElmentF(getElem(0), aramanim);
    clickOnDinoElmentF(getElem(0), aramanim);
    expect(getElem(0).classList).not.toStrictEqual(
      expect.objectContaining({ "2": "temp1" })
    );
    await sleep(1300);
    expect(getElem(0).style.visibility).toEqual("visible");
    expect(getElem(0).classList).toStrictEqual(
      expect.objectContaining({ "2": "temp1" })
    );
  });
});
