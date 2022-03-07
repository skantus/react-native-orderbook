import { numberFormat } from './numberFormat';

describe('calculatePercent', () => {
  it('should calculate the percent between two numbers', () => {
    expect(numberFormat(2).format(37502)).toEqual('37,502.00');
    expect(numberFormat(2).format(37498.5)).toEqual('37,498.50');
    expect(numberFormat(2).format(37486)).toEqual('37,486.00');
    expect(numberFormat(2).format(37502)).toEqual('37,502.00');
    expect(numberFormat(2).format(37558)).toEqual('37,558.00');
    expect(numberFormat(2).format(37570.5)).toEqual('37,570.50');
    expect(numberFormat(2).format(37574.5)).toEqual('37,574.50');
    expect(numberFormat(2).format(0)).toEqual('0.00');
    expect(numberFormat(2).format(-1)).toEqual('-1.00');
  });
});
