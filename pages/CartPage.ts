import { BasePage } from './BasePage';

export class CartPage extends BasePage {

    async itemNames() {
        return await this.page
            .locator('.cart_item .inventory_item_name')
            .allTextContents();
    }

    async removeItem(productName: string) {
        await this.page
            .locator('.cart_item')
            .filter({ hasText: productName })
            .locator('button')
            .click();
    }
}