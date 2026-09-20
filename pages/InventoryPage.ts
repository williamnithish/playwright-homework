import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

   async addProduct(productName: string) {
    await this.page
        .locator('.inventory_item')
        .filter({ hasText: productName })
        .getByRole('button', { name: /add to cart/i })
        .click();
}

    async openCart() {
        await this.page.locator('.shopping_cart_link').click();
    }
}