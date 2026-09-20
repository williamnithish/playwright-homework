import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

    async addProduct(productName: string) {

        const product = this.page
            .locator('.inventory_item')
            .filter({ hasText: productName });

        await product.locator('button').click();
    }

    async openCart() {
        await this.page.locator('.shopping_cart_link').click();
    }
}