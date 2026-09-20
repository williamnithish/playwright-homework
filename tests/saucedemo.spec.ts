import { test, expect } from '../fixtures/cart.fixture';


test('Add two products and remove one from cart', async ({ cartPage }) => {

    const items = await cartPage.itemNames();

    expect(items).toContain('Sauce Labs Backpack');
    expect(items).toContain('Sauce Labs Bike Light');

    await cartPage.removeItem('Sauce Labs Backpack');

    const remainingItems = await cartPage.itemNames();

    expect(remainingItems).not.toContain('Sauce Labs Backpack');
    expect(remainingItems).toContain('Sauce Labs Bike Light');
});

test('Verify locked out user error message', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('locked_out_user');
    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();

    // Homework 2
});
 
