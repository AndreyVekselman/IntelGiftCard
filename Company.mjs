export class Company {
  AllCards;
  CompanyName;
  constructor(Name) {
    this.CompanyName = Name;
    this.AllCards = [];
  }
  AddGiftCard(Card) {
    this.AllCards.push(Card);
  }
  PrintGifts() {
    console.log("Company " + this.CompanyName + " has discount cards: ");
    this.AllCards.forEach((element) => {
      console.log(element.CardName);
    });
  }
}
