import { test, expect } from '@playwright/test';

test('problem_user shows same image for all products', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page.locator('.inventory_list')).toBeVisible();

    const images = page.locator('.inventory_item_img img');

    await expect(images).toHaveCount(6);

    const firstImage = await images.nth(0).getAttribute('src');

    for (let i = 1; i < 6; i++) {
        await expect(images.nth(i)).toHaveAttribute('src', firstImage!);
    }
});