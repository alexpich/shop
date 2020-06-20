export default function calcTotalPrice(bag) {
  return bag.reduce((tally, bagItem) => {
    if (!bagItem.item) return tally;
    return tally + bagItem.quantity * bagItem.item.price;
  }, 0);
}
