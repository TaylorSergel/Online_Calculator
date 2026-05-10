const { test, expect } = require('@playwright/test');

// ─── TEST 1: Display exists on page load ──────────────────────
test('display exists on page load', async ({ page }) => {
  await page.goto('/');
  const display = page.locator('#display');
  await expect(display).toBeVisible();
});

// ─── TEST 2: Clicking hex button A updates the display ────────
test('clicking hex button A updates the display', async ({ page }) => {
  await page.goto('/');
  await page.locator('.btn[data-value="A"]').click();
  const display = page.locator('#display');
  await expect(display).toHaveText('A');
});

// ─── TEST 3: Clicking equals shows the correct result ─────────
test('A + 5 = F is displayed correctly', async ({ page }) => {
  await page.goto('/');
  await page.locator('.btn[data-value="A"]').click();
  await page.locator('.btn[data-operator="+"]').click();
  await page.locator('.btn[data-value="5"]').click();
  await page.locator('#equals').click();
  const display = page.locator('#display');
  await expect(display).toHaveText('F');
});

// ─── TEST 4: Clear button resets the display ──────────────────
test('clear button resets the display', async ({ page }) => {
  await page.goto('/');
  await page.locator('.btn[data-value="A"]').click();
  await page.locator('#clear').click();
  const display = page.locator('#display');
  await expect(display).toHaveText('0');
});