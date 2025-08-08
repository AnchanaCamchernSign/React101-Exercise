function convertRomandNumber(number) {
  const numberRomand = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  if (isNaN(number)) return "";

  let result = "";
  for (let key in numberRomand) {
    while (number >= numberRomand[key]) {
      result += key;
      number -= numberRomand[key];
    }
  }
  return result;
}

module.exports = {
  convertRomandNumber,
};
