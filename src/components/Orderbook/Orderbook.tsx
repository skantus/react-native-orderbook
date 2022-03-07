import OrderList from './OrderList';
import styles from './styles';
import React, { useCallback, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useWS } from 'src/api';
import Footer from 'src/components/common/Footer';
import Header from 'src/components/common/Header';
import ListHeader from 'src/components/common/ListHeader';
import { OrderType } from 'src/components/types';
import {
  BITCOIN_API,
  BITCOIN_ID,
  ETHERIUM_API,
  ETHERIUM_ID,
} from 'src/constants';
import { useTheme } from 'src/theme';

const listHeaderTitles = ['PRICE', 'SIZE', 'TOTAL'];

const Orderbook = () => {
  const { theme } = useTheme();
  const style = styles(theme);
  const [currentFeed, setCurrentFeed] = useState<string>(BITCOIN_ID);
  const { data, toggleFeed } = useWS();

  const renderHeader = useCallback(
    () => <Text style={style.spreadText}>{data?.spread}</Text>,
    [style.spreadText, data?.spread],
  );

  const onToggleFeed = useCallback(() => {
    const defaultSelected = currentFeed === BITCOIN_ID;
    const message = defaultSelected ? ETHERIUM_API : BITCOIN_API;
    setCurrentFeed(defaultSelected ? ETHERIUM_ID : BITCOIN_ID);
    toggleFeed({ message });
  }, [currentFeed, toggleFeed]);

  return (
    <SafeAreaView style={style.container} testID="orderbook">
      <Header title="Order Book" />
      <OrderList
        header={<ListHeader titles={listHeaderTitles} />}
        list={data?.asks}
        type={OrderType.Ask}
      />
      <OrderList
        header={renderHeader()}
        list={data?.bids}
        type={OrderType.Bid}
      />
      <Footer buttonTitle="Toggle Feed" onPressButton={onToggleFeed} />
    </SafeAreaView>
  );
};

export default Orderbook;
