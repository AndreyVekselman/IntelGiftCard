import { GiftCard } from "./GiftCard.mjs";
export class IntelGift extends GiftCard {
  AllProducts;
  constructor(CardName, Discount, Product) {
    super(CardName, Discount);
    this.Product = Product;
    this.CardName = CardName;
    this.AllProducts = [];
    this.AddProducts(this.Product);
  }
  AddProducts(Product) {
    this.AllProducts.push(Product);
  }
  CalcDiscount(Product) {
    let discount = 0;
    this.AllProducts.forEach((element) => {
      if (element.Name == Product.ProductName) {
        return (discount = element.Discount * Product.ProductPrice);
      }
    });
  }
}
