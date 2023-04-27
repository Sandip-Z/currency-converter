export const parseDecimal = (number: number, decimalPlace: number) => {
  return Number(number.toFixed(decimalPlace));
};
