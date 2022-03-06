import { WebsocketMessage, WebsocketResponse } from './types';
import { isEmpty, throttle } from 'lodash';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Alert } from 'react-native';
import {
  BITCOIN_API_MESSAGE,
  INITIAL_FEED_KEY,
  THROTTLE_DELAY,
  WEBSOCKET_URL,
} from 'src/constants';
import { getList } from 'src/utils';

type WSProviderType = {
  data: WebsocketResponse;
  toggleFeed: (message: { message: WebsocketMessage }) => void;
};

const WSContext = createContext<WSProviderType>({
  data: {},
  toggleFeed: () => {},
});

const useWS = () => useContext(WSContext);

const getSocket = (url: string) => new WebSocket(url);

const WSProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<WebsocketResponse>({});
  const connection = useRef<WebSocket>(getSocket(WEBSOCKET_URL));
  const initialDataFeed = useRef<WebsocketResponse>({});

  const stopConnection = useCallback(() => {
    connection.current?.close();
  }, []);

  const updateData = useCallback(() => {
    connection.current.onmessage = throttle(response => {
      const data: WebsocketMessage = JSON.parse(response?.data);
      const hasInfo = !isEmpty(initialDataFeed.current);
      hasInfo && setData(getList(initialDataFeed.current, data));
    }, THROTTLE_DELAY);
  }, []);

  const requestData = useCallback(
    () =>
      (connection.current.onmessage = response => {
        const data: WebsocketMessage = JSON.parse(response?.data);
        if (data?.feed === INITIAL_FEED_KEY) {
          initialDataFeed.current = data;
          setData(data);
          updateData();
        }
      }),
    [updateData],
  );

  const startConnection = useCallback(
    (message: WebsocketMessage = BITCOIN_API_MESSAGE) => {
      connection.current = getSocket(WEBSOCKET_URL);
      const socket = connection.current;
      socket.onopen = async () => {
        socket?.send(JSON.stringify(message));
        try {
          requestData();
        } catch {
          Alert.alert('Error', 'An error has ocurred!');
        }
      };
    },
    [requestData],
  );

  const toggleFeed = useCallback(
    ({ message }: { message: WebsocketMessage }) => {
      stopConnection();
      setData({});
      initialDataFeed.current = {};
      startConnection(message);
    },
    [stopConnection, startConnection],
  );

  useEffect(() => {
    startConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WSContext.Provider
      value={{
        data,
        toggleFeed,
      }}>
      {children}
    </WSContext.Provider>
  );
};

export { useWS, WSProvider };
