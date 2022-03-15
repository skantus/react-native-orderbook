import { calculatePercent } from './calculatePercent';
import { formattedResponse } from './formattedResponse';
import { getSortedList } from './getSortedList';
import { numberFormat } from './numberFormat';
import { FeedsResponse, WebsocketResponse } from 'src/api';

const getMaxPrice = (list?: FeedsResponse) => ({
  bidsTotal: (list?.bids && list?.bids[0]?.price) ?? 0,
  asksTotal: list?.asks?.slice(-1)[0]?.price ?? 0,
});

const getUpdatedList = ({
  snapshotData,
  data,
  previousList = {},
}: {
  snapshotData: WebsocketResponse;
  data: WebsocketResponse;
  previousList?: FeedsResponse;
}): FeedsResponse => {
  const { bids, asks } = getSortedList(snapshotData, data);
  const total = getMaxPrice(previousList);

  const highestBids = bids[0][0];
  const lowestAsks = asks[0][0];

  const centerPrice = parseFloat(((lowestAsks + highestBids) / 2).toFixed(2));
  const spread = numberFormat(1).format(lowestAsks - highestBids);
  const spreadPercent = calculatePercent(lowestAsks, highestBids);

  return {
    productId: data?.product_id,
    spread: `Spread: ${spread} (${spreadPercent}%) ${centerPrice}`,
    bids: formattedResponse(bids, total.bidsTotal),
    asks: formattedResponse(asks, total.asksTotal),
  };
};

export { getUpdatedList };
