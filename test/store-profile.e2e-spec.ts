import { test, expect } from "@playwright/test";

test("update profile sucessfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" }); // wait all JS requests to have been made
  await page.waitForTimeout(2000);

  await page.getByRole("button", { name: "Merkadin dos Guri" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("menuitem", { name: "Perfil da loja" }).click();
  await page.getByLabel("Nome").fill("Merkadin dos Guri");
  await page.getByLabel("Descrição").fill("Avenida Brasil - Estância Velha/RS");
  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Perfil atualizado com sucesso!");
  await expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Close" }).click();

  await expect(
    page.getByRole("button", { name: "Merkadin dos Guri" }),
  ).toBeVisible();
});
