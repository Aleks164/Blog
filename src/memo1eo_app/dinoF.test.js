import { dinoF } from "./dinoF";
import makeLayout from "./leoLayout";
import * as aram from "./shuffle";

describe("draw dino mode", () => {
  let el;
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
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
    "a6"
  ];
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
  });
  afterEach(() => {
    document.getElementsByTagName("body")[0].innerHTML = "";
  });

  it("it is should to create a layout in html with the correct number of elements and the required parameters inside and change them in 3 seconds", async () => {
    makeLayout(el);

    const listOfColorElementsHTML = el.getElementsByClassName("buttons");
    const listOfColorElements = [...listOfColorElementsHTML];
    const spy = jest.spyOn(aram, "shuffle");

    spy.mockReturnValueOnce(aramColor2);

    dinoF(listOfColorElements);
    const aramNumberOfElem = Math.round(
      Math.random() * listOfColorElements.length
    );
    let aramString = listOfColorElementsHTML[aramNumberOfElem];
    aramString = aramString.outerHTML;
    expect(listOfColorElements.length).toEqual(12);
    expect(el.innerHTML).toStrictEqual(
      expect.stringContaining(
        `<div onclick=\"clickOnElment(this)\" id="b${aramNumberOfElem + 1
        }\" class=\"buttons ${aramColor2[aramNumberOfElem]
        }\" style=\"display: inline-block; visibility: visible; transition: all 2.5s;\"></div>`
      )
    );
    expect(aramString).toBe(
      `<div onclick=\"clickOnElment(this)\" id="b${aramNumberOfElem + 1
      }\" class=\"buttons ${aramColor2[aramNumberOfElem]
      }\" style=\"display: inline-block; visibility: visible; transition: all 2.5s;\"></div>`
    );
    await sleep(3100);

    expect(
      el.getElementsByClassName("buttons")[aramNumberOfElem].outerHTML
    ).toStrictEqual(
      expect.stringContaining(
        `class="buttons ${aramColor2[aramNumberOfElem]} temp1"`
      )
    );
    aram.shuffle.mockRestore();
  });
});
