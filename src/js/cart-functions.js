function calculateChange(payment, total) {
  return payment - total;
}

const isSufficientPayment = (payment, total) => payment >= total;

//   if (payment >= total) {
//     return true;
//   } else {
//     return false;
//   }

function calculateTotal(itmesArray) {
  let sum = 0;
  itmesArray.forEach((element) => {
    sum += element.price;
  });
  return sum;
}

function addItem(itemsArray, name, price) {
  const obj = { name: name, price: price };
  itemsArray.push(obj);

  return itemsArray;
}
function removeItem(itemsArray, index) {
  itemsArray.splice(index, 1);
}

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
