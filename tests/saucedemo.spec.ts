import { test, expect } from '@playwright/test';

test('Verify locked out user error message', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('locked_out_user');
  await page.locator('#password').fill('secret_sauce');

  await page.locator('#login-button').click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

