import { FeedsType, WebsocketResponse } from 'src/api';

const getUniqueList = ({
  previousList,
  currentList,
}: {
  previousList: FeedsType;
  currentList: FeedsType;
}) => {
  if (!previousList && !currentList) {
    return;
  }
  return [...new Map([...(previousList ?? []), ...(currentList ?? [])])].filter(
    Boolean,
  );
};

const getList = (
  initialData: WebsocketResponse,
  data: WebsocketResponse,
): WebsocketResponse => {
  return {
    ...data,
    bids: getUniqueList({
      previousList: initialData?.bids,
      currentList: data?.bids,
    }),
    asks: getUniqueList({
      previousList: initialData?.asks,
      currentList: data?.asks,
    }),
  };
};

export { getList, getUniqueList };
