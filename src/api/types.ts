export type WebsocketMessage = {
  event: string;
  feed: string;
  product_ids?: Array<'PI_XBTUSD' | 'PI_ETHUSD'>;
};

export type FeedsType = [number, number][] | undefined;

export type WebsocketResponse = {
  event?: string;
  product_id?: string;
  feed?: string;
  version?: number;
  numLevels?: number;
  bids?: FeedsType;
  asks?: FeedsType;
};
