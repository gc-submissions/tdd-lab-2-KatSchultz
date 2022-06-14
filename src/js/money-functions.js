function formatCurrency(amount) {
  if (amount < 0) {
    amount *= -1;
    return `-$${amount.toFixed(2)}`;
  }
  return `$${amount.toFixed(2)}`;
}

function getCoins(cents)

module.exports = { formatCurrency, getCoins };
