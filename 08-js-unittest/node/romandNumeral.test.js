const { convertRomandNumber } = require("./romandNumeral");

describe("convertRomandNumber", function () {
  test("1 should be I", function () {
    const number = 1;
    const expected = "I";

    const result = convertRomandNumber(number);
    expect(expected).toEqual(result);
  });

  test("2 should be II", function () {
    const number = 2;
    const expected = "II";

    const result = convertRomandNumber(number);
    expect(expected).toEqual(result);
  });

  test("7 should be VII", function () {
    const number = 7;
    const expected = "VII";

    const result = convertRomandNumber(number);
    expect(expected).toEqual(result);
  });

  test("11 should be XI", function () {
    const number = 11;
    const expected = "XI";

    const result = convertRomandNumber(number);
    expect(expected).toEqual(result);
  });

  test("1001 should be XI", function () {
    const number = 1001;
    const expected = "MI";

    const result = convertRomandNumber(number);
    expect(expected).toEqual(result);
  });

  test("2001 should be MMI", function () {
    const number = 2001;
    const expected = "MMI";

    const result = convertRomandNumber(number);
    expect(expected).toEqual(result);
  });
});
