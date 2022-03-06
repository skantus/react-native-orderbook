import OrderList from './OrderList';
import styles from './styles';
import React, { useCallback, useMemo } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useWS } from 'src/api';
import Footer from 'src/components/common/Footer';
import Header from 'src/components/common/Header';
import ListHeader from 'src/components/common/ListHeader';
import { OrderType } from 'src/components/types';
import {
  BITCOIN_API_MESSAGE,
  BITCOIN_ID,
  ETHERIUM_API_MESSAGE,
} from 'src/constants';
import { useTheme } from 'src/theme';

const listHeaderTitles = ['PRICE', 'SIZE', 'TOTAL'];

const Orderbook = () => {
  const { theme } = useTheme();
  const style = styles(theme);
  const { data, toggleFeed } = useWS();

  const getImage = useMemo(
    () =>
      data?.product_id === BITCOIN_ID
        ? require('src/images/bitcoin.png')
        : require('src/images/etherium.png'),
    [data?.product_id],
  );

  const getMessage = useMemo(
    () =>
      data?.product_id === BITCOIN_ID
        ? ETHERIUM_API_MESSAGE
        : BITCOIN_API_MESSAGE,
    [data?.product_id],
  );

  const renderHeader = useCallback(
    () => <Text style={style.spreadText}>Spread 13.0 (0.04%)</Text>,
    [style.spreadText],
  );

  const onToggleFeed = useCallback(() => {
    toggleFeed({ message: getMessage });
  }, [toggleFeed, getMessage]);

  return (
    <SafeAreaView style={style.container} testID="orderbook">
      <Header image={getImage} title="Order Book" />
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
