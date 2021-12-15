import makeLayout from "./leoLayout";

describe("layout test", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
  });
  afterEach(() => {
    document.getElementsByTagName("html")[0].innerHTML = "";
  });

  it("shiud create layout in html element", async () => {
    makeLayout(el);

    expect(el.innerHTML).toStrictEqual(
      expect.stringContaining('<div class="titleleo">')
    );
    expect(el.innerHTML).toStrictEqual(
      expect.stringContaining(
        '<div onclick="clickOnElment(this)" id="b12" class="buttons "></div>'
      )
    );
  });
});
