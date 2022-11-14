import { GiftCard } from "./GiftCard.mjs";
export class IntelGift extends GiftCard {
  // AllProducts;
  constructor(CardName, Discount, Product) {
    super(CardName, Discount);
    this.Product = Product;
    this.CardName = [];
    this.AddProducts(this.Product);
  }
  AddProducts(Product) {
    this.CardName.push(Product);
  }
}
