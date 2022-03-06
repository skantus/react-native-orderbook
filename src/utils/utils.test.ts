import { keyExtractor } from './utils';

describe('keyExtractor', () => {
  it('should return the key correctly', () => {
    expect(keyExtractor(null, 5)).toEqual('item-5');
    expect(keyExtractor(null, 32)).toEqual('item-32');
    expect(keyExtractor(null, 101)).toEqual('item-101');
  });
});
