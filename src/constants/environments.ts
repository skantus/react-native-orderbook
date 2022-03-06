import { WebsocketMessage } from 'src/api';

export const WEBSOCKET_URL = 'wss://www.cryptofacilities.com/ws/v1';

const CUSTOM_MESSAGE: WebsocketMessage = {
  event: 'subscribe',
  feed: 'book_ui_1',
  product_ids: [],
};

export const BITCOIN_API_MESSAGE: WebsocketMessage = {
  ...CUSTOM_MESSAGE,
  product_ids: ['PI_XBTUSD'],
};

export const ETHERIUM_API_MESSAGE: WebsocketMessage = {
  ...CUSTOM_MESSAGE,
  product_ids: ['PI_ETHUSD'],
};

export const THROTTLE_DELAY = 500;
