const { numberToThaiText } = require("./convertNum.js");

describe("numberToThaiText", function () {

  test("1 should be หนึ่ง", function () {
    const inputNumber = 1;
    const expected = "หนึ่ง";

    const result = numberToThaiText(inputNumber);
    expect(expected).toEqual(result);
  });

  test("2 should be สอง", function () {
    const inputNumber = 2;
    const expected = "สอง";

    const result = numberToThaiText(inputNumber);
    expect(expected).toEqual(result);
  });

  test("9 should be เก้า", function () {
    const inputNumber = 9;
    const expected = "เก้า";

    const result = numberToThaiText(inputNumber);
    expect(expected).toEqual(result);
  });

  test("11 should be สิบเอ็ด", function () {
    const inputNumber = 11;
    const expected = "สิบเอ็ด";

    const result = numberToThaiText(inputNumber);
    expect(expected).toEqual(result);
  });

  test("21 should be ยี่สิบเอ็ด", function () {
    const inputNumber = 21;
    const expected = "ยี่สิบเอ็ด";

    const result = numberToThaiText(inputNumber);
    expect(expected).toEqual(result);
  });

  test("51 should be สิบเอ็ด", function () {
    const inputNumber = 51;
    const expected = "ห้าสิบเอ็ด";

    const result = numberToThaiText(inputNumber);
    expect(expected).toEqual(result);
  });

  test("51 should be ห้าสิบเอ็ด", function () {
    const inputNumber = 51;
    const expected = "ห้าสิบเอ็ด";

    const result = numberToThaiText(inputNumber);
    expect(expected).toEqual(result);
  });

  test("1001 should be หนึ่งพันหนึ่ง", function () {
    const inputNumber = 1001
    const expected = "หนึ่งพันหนึ่ง" 

    const result = numberToThaiText(inputNumber)
    expect(expected).toEqual(result)
  });

   test("1000001 should be หนึ่งล้านหนึ่ง", function () {
    const inputNumber = 1000001 
    const expected = "หนึ่งล้านหนึ่ง" 

    const result = numberToThaiText(inputNumber)
    expect(expected).toEqual(result)
  });
});
