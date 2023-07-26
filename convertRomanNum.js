function romanToInt(romanNumeral) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentChar = romanNumeral[i];
    const nextChar = romanNumeral[i + 1];
    if (romanValues[currentChar] < romanValues[nextChar]) {
      result -= romanValues[currentChar];
    } else {
      result += romanValues[currentChar];
    }
  }
  return result;
}
const romanNumeral = "XXI";
const integerVal = romanToInt(romanNumeral);
console.log(integerVal);