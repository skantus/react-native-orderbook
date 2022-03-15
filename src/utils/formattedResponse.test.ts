import { formattedResponse } from './formattedResponse';
import { FeedType, OrderType } from 'src/api';

describe('formattedResponse', () => {
  const list: OrderType[] = [
    [37737, 4400],
    [37736, 1204],
  ];

  const expectedResult: FeedType[] = [
    {
      price: 37737,
      size: 4400,
      total: 4400,
      percent: '22.7%',
    },
    {
      price: 37736,
      size: 1204,
      total: 5604,
      percent: '17.8%',
    },
  ];

  it('should format the list properly', () => {
    expect(formattedResponse(list, 1000)).toEqual(expectedResult);
  });
});
