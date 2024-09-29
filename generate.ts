import { chromium } from "playwright";

const generate = async (html: string) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setContent(html);
  await page.pdf({ path: "example.pdf", format: "A4" });
  await browser.close();

  console.log("PDF file generated successfully.");
};

export default generate;
