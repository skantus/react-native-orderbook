import { FeedType } from 'src/api';

export type OrderItemType = {
  item: FeedType;
  index: number;
};

export enum OrderType {
  Bid = 'bid',
  Ask = 'ask',
}
