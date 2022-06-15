const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("When payment is 6 and total is 5 then change will  be 1", () => {
    //Arrange
    const total = 5;
    const payment = 6;

    //Act
    const change = calculateChange(payment, total);

    //Assert
    expect(change).toBe(1);
  });

  test("When payment is 13.03 and total is 12.30 then change will  be 0.73", () => {
    //Arrange
    const total = 12.3;
    const payment = 13.03;

    //Act
    const change = calculateChange(payment, total);

    //Assert
    expect(change).toBeCloseTo(0.73);
  });

  test("When payment is 25 and total is 20 then change will  be 5", () => {
    //Arrange
    const total = 20;
    const payment = 25;

    //Act
    const change = calculateChange(payment, total);

    //Assert
    expect(change).toBe(5);
  });
});

describe("isSufficientPayment", () => {
  test("When payment is 5 and total is 6 then it returns true", () => {
    //Arrange
    const total = 5;
    const payment = 6;

    //Act
    const isSufficient = isSufficientPayment(payment, total);

    //Assert
    expect(isSufficient).toBe(true);
  });
  test("When payment is 7 and total is 10 then it returns false", () => {
    //Arrange
    const total = 10;
    const payment = 7;

    //Act
    const isSufficient = isSufficientPayment(payment, total);

    //Assert
    expect(isSufficient).toBe(false);
  });
  test("When payment is 3 and total is 3 then it returns true", () => {
    //Arrange
    const total = 3;
    const payment = 3;

    //Act
    const isSufficient = isSufficientPayment(payment, total);

    //Assert
    expect(isSufficient).toBe(true);
  });
  test("When payment is 1 and total is 2 then it returns false", () => {
    //Arrange
    const total = 2;
    const payment = 1;

    //Act
    const isSufficient = isSufficientPayment(payment, total);

    //Assert
    expect(isSufficient).toBe(false);
  });
});

describe("calculateTotal", () => {
  test("Calculates total with one item", () => {
    //Arrange
    const items = [{ name: "Ball", price: 4.99 }];

    //Act
    const total = calculateTotal(items);

    //Assert
    expect(total).toEqual(4.99);
  });

  test("Calculates total with three items", () => {
    //Arrange
    const items = [
      { name: "Ball", price: 3.5 },
      { name: "Ball", price: 12.99 },
      { name: "Ball", price: 0.03 },
    ];

    //Act
    const total = calculateTotal(items);

    //Assert
    expect(total).toBeCloseTo(16.52);
  });

  test("Calculates total and expects it to be 0", () => {
    //Arrange
    const items = [];

    //Act
    const total = calculateTotal(items);

    //Assert
    expect(total).toBe(0);
  });
  test("Calculates total with four items", () => {
    //Arrange
    const items = [
      { name: "Ball", price: 10 },
      { name: "Ball", price: 12 },
      { name: "Ball", price: 20 },
      { name: "Ball", price: 10 },
    ];

    //Act
    const total = calculateTotal(items);

    //Assert
    expect(total).toBe(52);
  });
});

describe("addItem", () => {
  test("Given an empty array, an item and a price, return an array with one item", () => {
    const array = [];

    addItem(array, "Beans", 3);

    expect(array).toContainEqual({ name: "Beans", price: 3 });
  });
  test("Given an array with one item, return an array with 2 items", () => {
    const array = [{ name: "Beans", price: 3 }];

    addItem(array, "Sugar", 2);

    expect(array).toContainEqual(
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 }
    );
  });
  test("Given an array with 3 items, return an array with 4 items", () => {
    const array = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Sugar", price: 5 },
    ];

    addItem(array, "Candy", 1);

    expect(array).toContainEqual(
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Sugar", price: 5 },
      { name: "Candy", price: 1 }
    );
  });
});

describe("removeItem", () => {
  test("Removes first element of an array", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 5 },
      { name: "Candy", price: 1 },
    ];

    removeItem(itemsArray, 0);

    expect(itemsArray).not.toContainEqual({ name: "Beans", price: 3 });
  });
  test("Remove last element from array", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 5 },
      { name: "Candy", price: 1 },
    ];

    removeItem(itemsArray, itemsArray.length - 1);

    expect(itemsArray).not.toContainEqual({ name: "Candy", price: 1 });
  });
  test("Remove middle element from array of 3 elements", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 5 },
      { name: "Candy", price: 1 },
    ];

    removeItem(itemsArray, 1);

    expect(itemsArray).not.toContainEqual({ name: "Sugar", price: 5 });
  });
  test("Remove element from array of one item", () => {
    const itemsArray = [{ name: "Beans", price: 3 }];

    removeItem(itemsArray, 0);

    expect(itemsArray).not.toContainEqual({ name: "Beans", price: 3 });
  });
});
