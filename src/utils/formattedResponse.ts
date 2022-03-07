import { numberFormat } from './numberFormat';
import { FeedType, OrderType } from 'src/api';

export const formattedResponse = (list: OrderType[]): FeedType[] => {
  let totalAccumulated = 0;
  return list
    ?.map(order => ({
      price: numberFormat(2).format(order[0]),
      size: numberFormat().format(order[1]),
      total: numberFormat().format((totalAccumulated += order[1])),
    }))
    .filter(item => item.size !== '0');
};
