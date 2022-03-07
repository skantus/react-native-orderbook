import { calculatePercent } from './calculatePercent';

describe('calculatePercent', () => {
  it('should calculate the percent between two numbers', () => {
    expect(calculatePercent(11240, 11192)).toEqual('0.43');
    expect(calculatePercent(240, 192)).toEqual('22.22');
    expect(calculatePercent(14540, 12192)).toEqual('17.57');
    expect(calculatePercent(1122, 1112)).toEqual('0.90');
    expect(calculatePercent(112240, 111192)).toEqual('0.94');
    expect(calculatePercent(0, 0)).toEqual('0');
  });
});
