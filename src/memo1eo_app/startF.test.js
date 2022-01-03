import { startF } from "./startF";
import makeLayout from "./leoLayout";
import * as aram from "./shuffle";

describe("draw color mode", () => {
  let el;
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

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

    spy.mockReturnValueOnce(aramColor);

    startF(aramColor, listOfColorElements);

    const aramNumberOfElem = Math.round(
      Math.random() * listOfColorElements.length
    );
    let aramString = listOfColorElementsHTML[aramNumberOfElem];
    aramString = aramString.outerHTML;
    expect(listOfColorElements.length).toEqual(12);
    expect(el.innerHTML).toStrictEqual(
      expect.stringContaining(
        `<div id="b${aramNumberOfElem + 1
        }\" class=\"buttons\" style=\"display: inline-block; visibility: visible; background-color: ${aramColor[aramNumberOfElem]
        }; transition: all 1s;\"></div>`)
    );
    expect(aramString).toBe(
      `<div id="b${aramNumberOfElem + 1
      }\" class=\"buttons\" style=\"display: inline-block; visibility: visible; background-color: ${aramColor[aramNumberOfElem]
      }; transition: all 1s;\"></div>`
    );
    await sleep(3100);

    expect(
      el.getElementsByClassName("buttons")[aramNumberOfElem].outerHTML
    ).toStrictEqual(expect.stringContaining('class="buttons temp1"'));
    aram.shuffle.mockRestore();
  });
});
