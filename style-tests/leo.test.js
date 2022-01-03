import puppeteer from "puppeteer";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

const sleep = async (x) =>
  new Promise((resolve) => {
    setTimeout(resolve, x);
  });

describe("leo.test", () => {
  // beforeEach(() => {
  //     jest.setTimeout(30000);
  // });
  [
    { width: 1920, height: 1080 },
    { width: 675, height: 320 },
    { width: 1024, height: 765 },
    { width: 1400, height: 800 },
  ].forEach(({ width, height }) =>
    it(`view ${width}x${height} params`, async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setViewport({ width, height });
      await page.goto("http://localhost:9000/pages/leo.html", {
        waitUntil: "networkidle0",
      });
      await sleep(3000);

      const image = await page.screenshot();
      await browser.close();

      // expect(image).toMatchImageSnapshot();
      expect(image).toMatchImageSnapshot(
        process.env.CI
          ? {
              failureThreshold: 0.5,
              failureThresholdType: "percent",
            }
          : undefined
      );
    })
  );
});
