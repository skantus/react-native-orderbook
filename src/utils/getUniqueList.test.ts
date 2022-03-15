import { getUniqueList } from './getUniqueList';
import { OrderType } from 'src/api';

describe('getUniqueList', () => {
  const previousList: OrderType[] = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [1, 1],
    [1, 1],
  ];

  const currentList: OrderType[] = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [6, 6],
    [6, 6],
    [6, 6],
    [1, 1],
  ];

  const expectedResult: OrderType[] = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
  ];

  it('Get a unique list of elements', () => {
    const result = getUniqueList(previousList, currentList);
    expect(result).toEqual(expectedResult);
  });
});
