export function LookForDiscount(Class, Product) {
  let i = 0;
  let discount = 0;
  while (i < Class.AllCards.length) {
    if (discount == 0) {
      discount = Class.AllCards[i].CalcDiscount(Product);
      i++;
    } else i += Class.AllCards.length;
  }
  if (discount == 0) {
    return `There is discount for the ${Product}`;
  } else {
    return `Price after discount for a ${Product} is ${discount}`;
  }
}
