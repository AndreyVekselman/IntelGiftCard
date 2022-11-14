export class GiftCard {
  CardName;
  Discount;
  constructor(CardName, Discount) {
    this.CardName = CardName;
    this.Discount = Discount;
  }
  CalcDiscount(price) {
    console.log(
      "Price after discount of " +
        this.CardName +
        " is:  " +
        price * (1 - this.Discount / 100) +
        " NIS"
    );
  }
}
