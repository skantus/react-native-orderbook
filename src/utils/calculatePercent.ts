export const calculatePercent = (a: number, b: number): string => {
  const result = (100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2);
  return Number(result) > 0 ? result : '0';
};
