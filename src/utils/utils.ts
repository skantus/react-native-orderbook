import { calculatePercent } from './calculatePercent';
import { formattedResponse } from './formattedResponse';
import { getUniqueList } from './getUniqueList';
import { numberFormat } from './numberFormat';
import { FeedsResponse, WebsocketResponse } from 'src/api';

const getList = (
  initialData: WebsocketResponse,
  data: WebsocketResponse,
): FeedsResponse => {
  const bids = getUniqueList(initialData?.bids, data?.bids);
  const asks = getUniqueList(initialData?.asks, data?.asks);

  const asksLowest = asks[0][0];
  const bidsHighest = bids[0][0];
  const spread = numberFormat(1).format(asksLowest - bidsHighest);
  const spreadPercent = calculatePercent(asksLowest, bidsHighest);

  return {
    bids: formattedResponse(bids),
    asks: formattedResponse(asks),
    spread: `Spread: ${spread} (${spreadPercent}%)`,
  };
};

export { getList };
