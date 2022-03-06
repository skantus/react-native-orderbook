import { WebsocketMessage, WebsocketResponse } from './types';
import throttle from 'lodash/throttle';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { THROTTLE_DELAY, WEBSOCKET_URL } from 'src/constants';
import { getList } from 'src/utils';

type WSProviderType = {
  data: WebsocketResponse;
  startConnection: () => void;
  stopConnection: () => void;
  sendMessage: (message: { message: WebsocketMessage }) => void;
};

const WSContext = createContext<WSProviderType>({
  data: {},
  startConnection: () => {},
  stopConnection: () => {},
  sendMessage: () => {},
});

const useWS = () => useContext(WSContext);
const getSocket = (url: string) => new WebSocket(url);

const INITIAL_FEED_KEY = 'book_ui_1_snapshot';

const WSProvider = ({ children }: { children: ReactNode }) => {
  const connection = useRef<WebSocket>(getSocket(WEBSOCKET_URL));
  const [data, setData] = useState<WebsocketResponse>({});
  const initialDataFeed = useRef<WebsocketResponse>({});

  const stopConnection = () => {
    connection.current?.close();
  };

  const sendMessage = ({ message }: { message: WebsocketMessage }) => {
    connection.current?.send(JSON.stringify(message));
  };

  const getRecords = useCallback(({ socket }: { socket: WebSocket }) => {
    socket.onmessage = throttle(response => {
      const data: WebsocketMessage = JSON.parse(response?.data);
      setData(getList(initialDataFeed.current, data));
    }, THROTTLE_DELAY);
  }, []);

  const addListener = useCallback(({ socket }: { socket: WebSocket }) => {
    return new Promise(resolve => {
      socket.onmessage = response => {
        const data: WebsocketMessage = JSON.parse(response?.data);
        if (data?.feed === INITIAL_FEED_KEY) {
          initialDataFeed.current = data;
          setData(data);
          resolve(true);
        }
      };
    });
  }, []);

  const startConnection = useCallback(async () => {
    connection.current = getSocket(WEBSOCKET_URL);
    const socket = connection.current;
    await addListener({ socket });
    getRecords({ socket });
  }, [addListener, getRecords]);

  useEffect(() => {
    startConnection();
  }, [startConnection]);

  return (
    <WSContext.Provider
      value={{ data, startConnection, stopConnection, sendMessage }}>
      {children}
    </WSContext.Provider>
  );
};

export { useWS, WSProvider };
