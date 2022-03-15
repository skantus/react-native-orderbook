import { FeedsResponse, WebsocketMessage, WebsocketResponse } from './types';
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
  BITCOIN_API,
  INITIAL_FEED_KEY,
  THROTTLE_DELAY,
  WEBSOCKET_URL,
} from 'src/constants';
import { getUpdatedList } from 'src/utils';

type WSProviderType = {
  data: FeedsResponse;
  toggleFeed: (message: { message: WebsocketMessage }) => void;
};

const WSContext = createContext<WSProviderType>({
  data: {},
  toggleFeed: () => {},
});

const useWS = () => useContext(WSContext);

const getSocket = (url: string) => new WebSocket(url);

const WSProvider = ({ children }: { children: ReactNode }) => {
  const connection = useRef<WebSocket | null>();
  const snapshotData = useRef<WebsocketResponse>({});
  const [orders, setOrders] = useState<FeedsResponse>({});

  const stopConnection = useCallback(() => {
    connection.current?.close();
  }, []);

  const updateData = useCallback(() => {
    if (!connection.current) {
      return;
    }

    let previousList: FeedsResponse;
    connection.current.onmessage = throttle(response => {
      if (isEmpty(snapshotData.current)) {
        return;
      }
      const data: WebsocketMessage = JSON.parse(response?.data);
      previousList = getUpdatedList({
        snapshotData: snapshotData.current,
        data,
        previousList,
      });
      setOrders(previousList);
    }, THROTTLE_DELAY);
  }, []);

  const addListener = useCallback(() => {
    if (!connection?.current) {
      stopConnection();
      return;
    }

    connection.current.onmessage = response => {
      const data: WebsocketMessage = JSON.parse(response?.data);
      if (data?.feed === INITIAL_FEED_KEY && isEmpty(snapshotData.current)) {
        snapshotData.current = data;
        setOrders(
          getUpdatedList({
            snapshotData: snapshotData.current,
            data,
          }),
        );
        updateData();
      }
    };
  }, [stopConnection, updateData]);

  const showErrorMessage = useCallback(() => {
    Alert.alert('Error', 'An error has ocurred!');
  }, []);

  const handleErrorConnection = useCallback(() => {
    if (!connection?.current) {
      return;
    }

    connection.current.onerror = () => {
      showErrorMessage();
    };
  }, [showErrorMessage]);

  const startConnection = useCallback(
    (message: WebsocketMessage = BITCOIN_API) => {
      connection.current = getSocket(WEBSOCKET_URL);
      const socket = connection.current;
      socket.onopen = () => {
        socket?.send(JSON.stringify(message));
        try {
          addListener();
          handleErrorConnection();
        } catch {
          showErrorMessage();
        }
      };
    },
    [addListener, handleErrorConnection, showErrorMessage],
  );

  const toggleFeed = useCallback(
    ({ message }: { message: WebsocketMessage }) => {
      stopConnection();
      connection.current = null;
      snapshotData.current = {};
      setOrders({});
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
        data: orders,
        toggleFeed,
      }}>
      {children}
    </WSContext.Provider>
  );
};

export { useWS, WSProvider };
