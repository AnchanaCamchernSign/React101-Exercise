function numberToThaiText(number) {
  const numberText = [
    "ศูนย์",
    "หนึ่ง",
    "สอง",
    "สาม",
    "สี่",
    "ห้า",
    "หก",
    "เจ็ด",
    "แปด",
    "เก้า",
  ];
  const positionText = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];

  let numStr = parseInt(number).toString();
  let result = "";
  let len = numStr.length;
  let i = 0;

  if (isNaN(number)) return "";

  for (i = 0; i < len; i++) {
    const digit = parseInt(numStr[i]);
    const position = len - i - 1;

    if (digit === 0) continue;

    if (position === 0 && digit === 1 && len > 1 && len < 3) {
      result += "เอ็ด";
    } else if (position === 1 && digit == 2) {
      result += "ยี่";
    } else if (position === 1 && digit == 1) {
      result += "";
    } else {
      result += numberText[digit];
    }
    result += positionText[position]
  }
  return result || numberText[0];
}

module.exports = {
  numberToThaiText,
};
