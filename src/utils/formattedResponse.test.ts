import { formattedResponse } from './formattedResponse';
import { FeedType, OrderType } from 'src/api';

describe('formattedResponse', () => {
  const list: OrderType[] = [
    [37737, 4400],
    [37736, 1204],
    [37735.5, 10000],
  ];

  const expectedResult: FeedType[] = [
    {
      price: '37,737.00',
      size: '4,400',
      total: '4,400',
      percent: '18%',
    },
    {
      price: '37,736.00',
      size: '1,204',
      total: '5,604',
      percent: '5%',
    },
    {
      price: '37,735.50',
      size: '10,000',
      total: '15,604',
      percent: '40%',
    },
  ];

  it('should format the list properly', () => {
    expect(formattedResponse(list, 25000)).toEqual(expectedResult);
  });
});
