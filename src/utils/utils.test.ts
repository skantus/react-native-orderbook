import { getUpdatedList } from './utils';
import { FeedsResponse, WebsocketResponse } from 'src/api';

describe('formattedResponse', () => {
  const initialData: WebsocketResponse = {
    feed: 'book_ui_1_snapshot',
    numLevels: 25,
    product_id: 'PI_XBTUSD',
    bids: [
      [37788, 4400],
      [37785, 30425],
      [37784, 10000],
    ],
    asks: [
      [37807.5, 10000],
      [37808, 7520],
      [37816.5, 4309],
    ],
  };

  const data: WebsocketResponse = {
    numLevels: 25,
    feed: 'book_ui_1_snapshot',
    bids: [
      [37788, 4400],
      [37785, 30425],
      [37784, 10000],
    ],
    asks: [
      [37807.5, 10000],
      [37808, 7520],
      [37816.5, 4309],
    ],
    product_id: 'PI_XBTUSD',
  };

  const expectedResult: FeedsResponse = {
    bids: [
      {
        price: '37,788.00',
        size: '4,400',
        total: '4,400',
        percent: '12%',
      },
      {
        price: '37,785.00',
        size: '30,425',
        total: '34,825',
        percent: '81%',
      },
      {
        price: '37,784.00',
        size: '10,000',
        total: '44,825',
        percent: '26%',
      },
    ],
    asks: [
      {
        percent: '26%',
        price: '37,807.50',
        size: '10,000',
        total: '10,000',
      },
      {
        percent: '20%',
        price: '37,808.00',
        size: '7,520',
        total: '17,520',
      },
      {
        percent: '11%',
        price: '37,816.50',
        size: '4,309',
        total: '21,829',
      },
    ],
    spread: 'Spread: 19.5 (0.05%)',
    productId: 'PI_XBTUSD',
  };

  it('should format the list properly', () => {
    expect(getUpdatedList(initialData, data)).toEqual(expectedResult);
  });
});
