import { expect } from '../fixtures/cart.fixture';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
async itemNames() {
    const items = this.page.locator('.inventory_item_name');

    await expect(items.first()).toBeVisible();

    return await items.allTextContents();
}

    async removeItem(productName: string) {
        await this.page
            .locator('.cart_item')
            .filter({ hasText: productName })
            .locator('button')
            .click();
    }
}