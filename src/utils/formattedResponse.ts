import { FeedType, OrderType } from 'src/api';

export const formattedResponse = (
  list: OrderType[],
  total: number,
): FeedType[] => {
  let totalAccumulated = 0;
  return list
    ?.map(order => {
      const price = order[0];
      const size = order[1];
      const totalAcc = (totalAccumulated += size);
      const chartPercent = ((total * 100) / totalAcc).toFixed(1);
      return {
        price,
        size,
        total: totalAcc,
        percent: `${chartPercent}%`,
      };
    })
    .filter(item => item.size !== 0);
};
