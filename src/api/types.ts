export type WebsocketMessage = {
  event: string;
  feed: string;
  product_ids?: Array<'PI_XBTUSD' | 'PI_ETHUSD'>;
};

export type OrderType = [number, number];

export type WebsocketResponse = {
  event?: string;
  product_id?: string;
  feed?: string;
  version?: number;
  numLevels?: number;
  bids?: OrderType[];
  asks?: OrderType[];
};

export type FeedType = {
  price: string;
  size: string;
  total: string;
};

export type FeedsResponse = {
  productId?: string;
  spread?: string;
  bids?: FeedType[];
  asks?: FeedType[];
};
