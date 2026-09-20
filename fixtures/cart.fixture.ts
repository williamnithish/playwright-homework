import { test as base } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

type Fixtures = {
    inventoryPage: InventoryPage;
    cartPage: CartPage;
};

export const test = base.extend<Fixtures>({

    inventoryPage: async ({ page }, use) => {

        const inventoryPage = new InventoryPage(page);

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();

        await use(inventoryPage);
    },

    cartPage: async ({ inventoryPage }, use) => {

        await inventoryPage.addProduct('Sauce Labs Backpack');
        await inventoryPage.addProduct('Sauce Labs Bike Light');

        await inventoryPage.openCart();

        const cartPage = new CartPage(inventoryPage.page);

        await use(cartPage);
    }
});

export { expect } from '@playwright/test';