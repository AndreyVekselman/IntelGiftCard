import { GiftCard } from "./GiftCard.mjs";
import { Company } from "./Company.mjs";
import { Product } from "./Product.mjs";
import { IntelGift } from "./IntelGift.mjs";

//create products
const Coffee = new Product("Coffee", 10);
const Tea = new Product("Tea", 8);
const IceCream = new Product("IceCream", 15);
const MilkShake = new Product("MilkShake", 21);

//create Gifts
const Max = new GiftCard("Max", 10);
const FoodCard = new GiftCard("FoodCard", 25);
const Japanica = new GiftCard("Japanica", 5);

////create IntelGift
const IntelMax = new IntelGift("IntelMax", 10, Tea);
IntelMax.AddProducts(Coffee);
IntelMax.AddProducts(IceCream);
// console.log(IntelMax.CardName);
const IntelFoodCard = new IntelGift("IntelFoodCard", 25, Tea);

// create company
const Tower = new Company("Tower");
const Intel = new Company("Intel");
Intel.AddGiftCard(IntelMax);
Intel.AddGiftCard(IntelFoodCard);

Intel.PrintGifts();

///////////////
// Intel.AddGiftCard("Max");

Tower.AddGiftCard(Max);
Tower.AddGiftCard(FoodCard);
Tower.PrintGifts();

Tower.AllCards.forEach((element) => {
  element.CalcDiscount(30);
});
