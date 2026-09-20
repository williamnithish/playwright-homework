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