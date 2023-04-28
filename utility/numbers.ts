export const showDecimal = (number: string) => {
  return (Math.round(+number * 100) / 100).toFixed(2);
};
