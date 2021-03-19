import puppeteer from "puppeteer";

describe("show/hide the details of an event", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(100000);
    browser = await puppeteer.launch({
      headless: false,
      // slowMo: 150,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("an event element is collapsed by default", async () => {
    const extra = await page.$(".event .eventOpen");
    expect(extra).toBeNull();
  });

  test("user can expand an event to see its details", async () => {
    await page.click(".event .details-btn");
    const extra = await page.$(".event .eventOpen");
    expect(extra).toBeDefined();
  });

  test("user can collapse an event to hide its details", async () => {
    await page.click(".event .details-btn");
    const extra = await page.$(".event .eventOpen");
    expect(extra).toBeNull();
  });
});

describe("filter events by city", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(1000000);
    browser = await puppeteer.launch({
      headless: false,
      // slowMo: 150,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("by default events will load by location", async () => {
    const extra = await page.$(".event");
    expect(extra).toBeDefined();
  });

  test("user can type in their city to see results", async () => {
    const extra = await page.$(".suggestions");
    await page.type(".city", "Berlin");
    expect(extra).toBeDefined();
  });
});
