import { WebsocketMessage } from 'src/api';

export const WEBSOCKET_URL = 'wss://www.cryptofacilities.com/ws/v1';
export const INITIAL_FEED_KEY = 'book_ui_1_snapshot';

export const BITCOIN_ID = 'PI_XBTUSD';
export const ETHERIUM_ID = 'PI_ETHUSD';

const CUSTOM_MESSAGE: WebsocketMessage = {
  event: 'subscribe',
  feed: 'book_ui_1',
  product_ids: [],
};

export const BITCOIN_API_MESSAGE: WebsocketMessage = {
  ...CUSTOM_MESSAGE,
  product_ids: [BITCOIN_ID],
};

export const ETHERIUM_API_MESSAGE: WebsocketMessage = {
  ...CUSTOM_MESSAGE,
  product_ids: [ETHERIUM_ID],
};

export const THROTTLE_DELAY = 3000;
