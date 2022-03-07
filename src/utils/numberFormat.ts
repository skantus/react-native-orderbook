export const numberFormat = (digits: number = 0) =>
  new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: digits,
  });
