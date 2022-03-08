import { calculatePercent } from './calculatePercent';
import { formattedResponse } from './formattedResponse';
import { getUniqueList } from './getUniqueList';
import { numberFormat } from './numberFormat';
import { FeedsResponse, WebsocketResponse } from 'src/api';

const getUpdatedList = (
  snapshotData: WebsocketResponse,
  data: WebsocketResponse,
): FeedsResponse => {
  const bids = getUniqueList(snapshotData?.bids, data?.bids);
  const asks = getUniqueList(snapshotData?.asks, data?.asks);

  const asksLowest = asks[0][0];
  const bidsHighest = bids[0][0];
  const spread = numberFormat(1).format(asksLowest - bidsHighest);
  const spreadPercent = calculatePercent(asksLowest, bidsHighest);

  return {
    productId: data?.product_id,
    spread: `Spread: ${spread} (${spreadPercent}%)`,
    bids: formattedResponse(bids, bidsHighest),
    asks: formattedResponse(asks, asksLowest),
  };
};

export { getUpdatedList };
