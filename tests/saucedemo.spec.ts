import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';

test('Add two products and remove one from cart', async ({ page }) => {

    
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    
    await page
        .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    
    await page
        .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        .click();

    
    await page.locator('.shopping_cart_link').click();

    const cartPage = new CartPage(page);

    
    const items = await cartPage.itemNames();

    expect(items).toContain('Sauce Labs Backpack');
    expect(items).toContain('Sauce Labs Bike Light');

    
    await cartPage.removeItem('Sauce Labs Backpack');

    
    const remainingItems = await cartPage.itemNames();

    expect(remainingItems).not.toContain('Sauce Labs Backpack');
    expect(remainingItems).toContain('Sauce Labs Bike Light');
});