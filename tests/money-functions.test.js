const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("Return 0 if given 0", () => {
    const amount = 0;

    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe("$0.00");
  });

  test("Return 1.00 if given 1", () => {
    const amount = 1;

    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe("$1.00");
  });

  test("Return $1.50 if given 1.5", () => {
    const amount = 1.5;

    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe("$1.50");
  });

  test("Return $0.01 if given 0.01", () => {
    const amount = 0.01;

    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe("$0.01");
  });

  test("Return $527.67 if given 527.6789", () => {
    const amount = 527.6789;

    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe("$527.68");
  });
  test("Return -$1.00 if given -1", () => {
    const amount = -1;

    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe("-$1.00");
  });

  test("Return $100.00 if given 100", () => {
    const amount = 100;

    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe("$100.00");
  });

  test("Return -$50.00 if given -50", () => {
    const amount = -50;

    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe("-$50.00");
  });
});

describe("getCoins", () => {
  test("Return 1 quarter, 1 nickel, and 2 pennies when given 32 cents", () => {
    const cents = 32;

    const coins = getCoins(cents);

    expect(coins).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
  test("retun one dime if given 10 cents", () => {
    const cents = 10;

    const coins = getCoins(cents);

    expect(coins).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
  });
});
