import { numberFormat } from './numberFormat';
import { FeedType, OrderType } from 'src/api';

export const formattedResponse = (
  list: OrderType[],
  highestValue: number,
): FeedType[] => {
  let totalAccumulated = 0;

  return list
    ?.map(order => {
      const chartPercent = ((100 / highestValue) * order[1]) / 1;
      return {
        price: numberFormat(2).format(order[0]),
        size: numberFormat().format(order[1]),
        total: numberFormat().format((totalAccumulated += order[1])),
        percent: `${chartPercent.toFixed(0)}%`,
      };
    })
    .filter(item => item.size !== '0');
};
