const { add, fizzBuzz } = require("./index");

describe("Add", function() {
  test("1 + 2 should be 3", function () {
    const num1 = 1;
    const num2 = 2;
    const expected = 3;

    const result = add(num1, num2);
    expect(expected).toEqual(result);
  });

  test("1 should be 1", function () {
    const input = 1;
    const expected = "1";

    const result = fizzBuzz(input);
    expect(expected).toEqual(result);
  });

  test("2 should be 2", function () {
    const input = 2;
    const expected = "2";

    const result = fizzBuzz(input);
    expect(expected).toEqual(result);
  });

    test("3 should be Fizz", function () {
    const input = 3;
    const expected = "Fizz";

    const result = fizzBuzz(input);
    expect(expected).toEqual(result);
  });
});
