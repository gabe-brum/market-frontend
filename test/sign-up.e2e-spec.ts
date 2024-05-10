import { test, expect } from "@playwright/test";

test("sign up sucessfully", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" }); // wait all JS requests to have been made

  await page.getByLabel("Nome do estabelecimento").fill("Pizza Shop");
  await page.getByLabel("Seu nome").fill("John Doe");
  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByLabel("Seu celular").fill("545466443");
  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Market cadastrado com sucesso!");

  await expect(toast).toBeVisible();
});

test("sign up with error", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" }); // wait all JS requests to have been made

  await page.getByLabel("Nome do estabelecimento").fill("Merkadin aleatório");
  await page.getByLabel("Seu nome").fill("John Doe");
  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByLabel("Seu celular").fill("545466443");
  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Erro ao cadastrar seu Market.");

  await expect(toast).toBeVisible();
});

test("navigate to login page", async ({ page }) => {
  await page.goto("/sign-up", { waitUntil: "networkidle" }); // wait all JS requests to have been made

  await page.getByRole("link", { name: "Fazer login" }).click();

  expect(page.url()).toContain("/sign-in");
});
