import { getUpdatedList } from './utils';
import { WebsocketResponse } from 'src/api';

describe('formattedResponse', () => {
  const initialData: WebsocketResponse = {
    feed: 'book_ui_1_snapshot',
    numLevels: 25,
    product_id: 'PI_XBTUSD',
    bids: [[37788, 4400]],
    asks: [[37807.5, 10000]],
  };

  const data: WebsocketResponse = {
    numLevels: 25,
    feed: 'book_ui_1_snapshot',
    bids: [[37788, 4400]],
    asks: [[37807.5, 10000]],
    product_id: 'PI_XBTUSD',
  };

  it('should format the list properly', () => {
    expect(getUpdatedList({ snapshotData: initialData, data })).toBeDefined();
  });
});
