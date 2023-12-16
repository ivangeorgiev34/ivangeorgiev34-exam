const { test, expect } = require("@playwright/test");

test("Check add products page", async ({ page }) => {
  await page.goto("https://ivangeorgiev34-exam.onrender.com/add-product");
  const form = await page.$("input");
  expect(form).toBeTruthy();
});
