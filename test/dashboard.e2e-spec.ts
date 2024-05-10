import { test, expect } from "@playwright/test";

test("display day orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  expect(page.getByText("20", { exact: true })).toBeVisible();
  expect(page.getByText("-5% em relação a ontem")).toBeVisible();
});

test("display month orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  expect(page.getByText("200", { exact: true })).toBeVisible();
  expect(page.getByText("-7% em relação ao mês passado")).toBeVisible();
});

test("display month canceled orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  expect(page.getByText("5", { exact: true })).toBeVisible();
  expect(page.getByText("-5% em relação ao mês passado")).toBeVisible();
});

test("display month revenue orders amount metric", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  expect(page.getByText("R$ 34,00")).toBeVisible();
  expect(page.getByText("+12% em relação ao mês passado")).toBeVisible();
});
