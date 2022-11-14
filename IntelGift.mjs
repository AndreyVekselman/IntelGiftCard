import { GiftCard } from "./GiftCard.mjs";
export class IntelGift extends GiftCard {
  AllProducts;
  constructor(CardName, Discount) {
    super(CardName, Discount);
    this.AllProducts = [];
  }
  AddProducts(Product) {
    this.AllProducts.push(Product);
  }
  CalcDiscount(Product) {
    let discount = 0;
    this.AllProducts.forEach((element) => {
      if (element.ProductName == Product) {
        discount = (1 - this.Discount / 100) * element.ProductPrice;
      }
    });
    return discount;
  }
}
