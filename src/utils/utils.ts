import { getUniqueList } from './getUniqueList';
import { numberFormat } from './numberFormat';
import { FeedsResponse, FeedType, OrderType, WebsocketResponse } from 'src/api';

const formattedResponse = (list: OrderType[]): FeedType[] => {
  let totalAccumulated = 0;
  let digits = 2;
  return list?.map(order => ({
    price: numberFormat(digits).format(order[0]),
    size: numberFormat().format(order[1]),
    total: numberFormat().format((totalAccumulated += order[1])),
  }));
};

const getList = (
  initialData: WebsocketResponse,
  data: WebsocketResponse,
): FeedsResponse => {
  const bids = getUniqueList(initialData?.bids, data?.bids);
  const asks = getUniqueList(initialData?.asks, data?.asks);
  return { bids: formattedResponse(bids), asks: formattedResponse(asks) };
};

export { getList };
