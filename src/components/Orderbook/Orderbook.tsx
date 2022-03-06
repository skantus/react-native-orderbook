import OrderList from './OrderList';
import styles from './styles';
import React, { useCallback } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useWS } from 'src/api';
import Footer from 'src/components/common/Footer';
import Header from 'src/components/common/Header';
import ListHeader from 'src/components/common/ListHeader';
import { OrderType } from 'src/components/types';
import { BITCOIN_API_MESSAGE } from 'src/constants';
import { useTheme } from 'src/theme';

const listHeaderTitles = ['PRICE', 'SIZE', 'TOTAL'];

const Orderbook = () => {
  const { theme } = useTheme();
  const style = styles(theme);
  const { data, sendMessage } = useWS();

  const renderHeader = useCallback(
    () => <Text style={style.spreadText}>Spread 13.0 (0.04%)</Text>,
    [style.spreadText],
  );

  const connect = useCallback(() => {
    sendMessage({ message: BITCOIN_API_MESSAGE });
  }, [sendMessage]);

  return (
    <SafeAreaView style={style.container}>
      <Header />
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
      <Footer buttonTitle="Toggle Feed" onPressButton={connect} />
    </SafeAreaView>
  );
};

export default Orderbook;
