function formatCurrency(amount) {
  if (amount < 0) {
    amount *= -1;
    return `-$${amount.toFixed(2)}`;
  }
  return `$${amount.toFixed(2)}`;
}

function getCoins(cents) {
  const change = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };

  while (cents > 25) {
    change.quarters += 1;
    cents -= 25;
    console.log("quarter");
  }
  while (cents > 10) {
    change.dimes += 1;
    cents -= 10;
    console.log("dime");
  }
  while (cents > 5) {
    change.nickels += 1;
    cents -= 5;
    console.log("nickel");
  }
  while (cents > 0) {
    change.pennies += 1;
    cents -= 1;
    console.log("penny");
  }
  return change;
}

module.exports = { formatCurrency, getCoins };
