import clickOnElmentF from "./clickOnElmentF";

describe("check click on color element", () => {
  let el;
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  beforeEach(() => {
    el = document.createElement("div");
    el.innerHTML = `<div onclick="clickOnElment(this)" id="b1" class="buttons temp1" style="background-color: blue; display: inline-block; visibility: visible;"></div>
    <div onclick="clickOnElment(this)" id="b2" class="buttons temp1" style="background-color: blue; display: inline-block; visibility: visible;"></div>
    <div onclick="clickOnElment(this)" id="b3" class="buttons temp1" style="background-color: yellow; display: inline-block; visibility: visible;"></div>`;
    document.body.append(el);
  });

  afterEach(() => {
    document.getElementsByTagName("body")[0].innerHTML = "";
  });

  it("should compare two selected colors and hide both one if they the same whith animation", async () => {
    function getElem(n) {
      return el.getElementsByClassName("buttons")[n];
    }
    expect(getElem(0).style.visibility).toEqual("visible");
    expect(getElem(1).style.visibility).toEqual("visible");
    clickOnElmentF(getElem(0));
    clickOnElmentF(getElem(1));
    expect(getElem(0).classList).toStrictEqual(
      expect.objectContaining({ 1: "animate__rollOut" })
    );
    expect(getElem(1).classList).toStrictEqual(
      expect.objectContaining({ 1: "animate__rollOut" })
    );
    await sleep(1300);
    expect(getElem(0).style.visibility).toEqual("hidden");
    expect(getElem(0).classList).not.toStrictEqual(
      expect.objectContaining({ 1: "animate__rollOut" })
    );
    expect(getElem(1).style.visibility).toEqual("hidden");
    expect(getElem(1).classList).not.toStrictEqual(
      expect.objectContaining({ 1: "animate__rollOut" })
    );
  });
  it("should compare two selected colors and refresh both one if they is'nt the same", async () => {
    function getElem(n) {
      return el.getElementsByClassName("buttons")[n];
    }
    expect(getElem(0).style.visibility).toEqual("visible");
    expect(getElem(2).style.visibility).toEqual("visible");
    clickOnElmentF(getElem(0));
    clickOnElmentF(getElem(2));
    expect(getElem(0).classList).not.toStrictEqual(
      expect.objectContaining({ 1: "temp1" })
    );
    expect(getElem(2).classList).not.toStrictEqual(
      expect.objectContaining({ 1: "temp1" })
    );
    await sleep(1300);
    expect(getElem(0).style.visibility).toEqual("visible");
    expect(getElem(0).classList).toStrictEqual(
      expect.objectContaining({ 1: "temp1" })
    );
    expect(getElem(2).style.visibility).toEqual("visible");
    expect(getElem(2).classList).toStrictEqual(
      expect.objectContaining({ 1: "temp1" })
    );
  });
  it("clicking on itself will not hide the element", async () => {
    function getElem(n) {
      return el.getElementsByClassName("buttons")[n];
    }
    expect(getElem(0).style.visibility).toEqual("visible");
    clickOnElmentF(getElem(0));
    clickOnElmentF(getElem(0));
    expect(getElem(0).classList).not.toStrictEqual(
      expect.objectContaining({ 1: "temp1" })
    );
    await sleep(1300);
    expect(getElem(0).style.visibility).toEqual("visible");
    expect(getElem(0).classList).toStrictEqual(
      expect.objectContaining({ 1: "temp1" })
    );
  });
});
