import { getUniqueList } from './getUniqueList';
import { WebsocketResponse } from 'src/api';

const getSortedList = (
  snapshotData: WebsocketResponse,
  data: WebsocketResponse,
) => {
  return {
    bids: getUniqueList(snapshotData?.bids, data?.bids).reverse(),
    asks: getUniqueList(snapshotData?.asks, data?.asks),
  };
};

export { getSortedList };
