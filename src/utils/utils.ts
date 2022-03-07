import { FeedsResponse, FeedType, OrderType, WebsocketResponse } from 'src/api';

const getUniqueList = ({
  previousList,
  currentList,
}: {
  previousList: OrderType[];
  currentList: OrderType[];
}) =>
  [...new Map([...(previousList ?? []), ...(currentList ?? [])])].filter(
    Boolean,
  );

const toMap = (list: OrderType[]): FeedType[] => {
  let totalAccumulated = 0;
  return list?.map(order => {
    const price = order[0];
    const size = order[1];
    const total = (totalAccumulated += size);
    return { price, size, total };
  });
};

const getList = (
  initialData: WebsocketResponse,
  data: WebsocketResponse,
): FeedsResponse => {
  const bids = getUniqueList({
    previousList: initialData?.bids || [],
    currentList: data?.bids || [],
  });

  const asks = getUniqueList({
    previousList: initialData?.asks || [],
    currentList: data?.asks || [],
  });

  return { bids: toMap(bids), asks: toMap(asks) };
};

export { getList, getUniqueList };
