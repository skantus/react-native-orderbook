import { getUniqueList } from './getUniqueList';
import { OrderType } from 'src/api';

describe('GetUniqueList', () => {
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

  const previousBids: OrderType[] = [
    [10000.1, 20000.2],
    [38989.5, 4649.0],
    [38989.0, 4592.0],
    [38988.5, 4272.0],
    [38986.5, 10000.0],
    [38986.0, 19949.0],
    [38985.5, 20000.0],
    [38985.0, 29266.0],
    [38984.5, 7100.0],
    [38984.0, 4400.0],
    [38979.0, 140881.0],
    [2, 2],
    [1, 1],
  ];

  const currentBids: OrderType[] = [
    [10000.1, 20000.2],
    [10000.1, 20000.2],
    [1, 1],
    [1, 1],
    [38989.0, 4592.0],
    [38988.5, 4272.0],
    [38986.5, 10000.0],
    [38986.0, 19949.0],
    [38985.5, 20000.0],
    [38985.0, 29266.0],
    [38984.5, 7100.0],
    [38984.0, 4400.0],
    [38979.0, 140881.0],
    [2, 2],
  ];

  const results: OrderType[] = [
    [10000.1, 20000.2],
    [38989.5, 4649],
    [38989, 4592],
    [38988.5, 4272],
    [38986.5, 10000],
    [38986, 19949],
    [38985.5, 20000],
    [38985, 29266],
    [38984.5, 7100],
    [38984, 4400],
    [38979, 140881],
    [2, 2],
    [1, 1],
  ];

  it('Get a unique list of bids', () => {
    const result = getUniqueList(previousBids, currentBids);
    expect(result).toEqual(results);
  });
});
