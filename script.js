import { GiftCard } from "./GiftCard.mjs";
import { Company } from "./Company.mjs";
import { Product } from "./Product.mjs";
import { IntelGift } from "./IntelGift.mjs";

//create products
const Coffee = new Product("Coffee", 10); //price 10NIS
const Tea = new Product("Tea", 8); //price 8NIS
const IceCream = new Product("IceCream", 15); //price 15NIS
const MilkShake = new Product("MilkShake", 21); //price 21NIS

//create Gifts (Cupons)
const Max = new GiftCard("Max", 10); // discount 10%
const FoodCard = new GiftCard("FoodCard", 25); // discount 25%
const Japanica = new GiftCard("Japanica", 5); // discount 5%

////create IntelGift
const IntelMax = new IntelGift("IntelMax", 10); //// discount 10%
const IntelFoodCard = new IntelGift("IntelFoodCard", 25); //// discount 25%
// add products to Intel Gift cards
IntelMax.AddProducts(Tea);
IntelMax.AddProducts(Coffee);
IntelMax.AddProducts(IceCream);
IntelFoodCard.AddProducts(MilkShake);

// create company
const Tower = new Company("Tower");
const Intel = new Company("Intel");

// Add gift Cards to Intel
Intel.AddGiftCard(IntelMax);
Intel.AddGiftCard(IntelFoodCard);
///////////
Intel.PrintGifts();

///Add gift cards to Tower
Tower.AddGiftCard(Max);
Tower.AddGiftCard(FoodCard);
Tower.AddGiftCard(Japanica);
///
Tower.PrintGifts();

Tower.AllCards.forEach((element) => {
  element.CalcDiscount(30);
});

function LookForDiscount(Product) {
  let i = 0;
  let discount = 0;
  while (i < Intel.AllCards.length) {
    if (discount == 0) {
      discount = Intel.AllCards[i].CalcDiscount(Product);
      i++;
    } else i += Intel.AllCards.length;
  }
  if (discount == 0) {
    console.log(`No discount found for ${Product}`);
  } else {
    console.log(`Price after discount for ${Product} is ${discount}`);
  }
}
//// looking for discount in Intel GiftCards
LookForDiscount("Tea");
LookForDiscount("Coffee");
LookForDiscount("MilkShake");
