import OrderList from './OrderList';
import styles from './styles';
import React, { useCallback } from 'react';
import { SafeAreaView, Text } from 'react-native';
import FEEDS from 'src/api/mocks/feeds';
import Footer from 'src/components/common/Footer';
import Header from 'src/components/common/Header';
import ListHeader from 'src/components/common/ListHeader';
import { OrderType } from 'src/components/types';
import { useTheme } from 'src/theme';

const listHeaderTitles = ['PRICE', 'SIZE', 'TOTAL'];

const Orderbook = () => {
  const { theme } = useTheme();
  const style = styles(theme);

  const renderHeader = useCallback(
    () => <Text style={style.spreadText}>Spread 13.0 (0.04%)</Text>,
    [style.spreadText],
  );

  return (
    <SafeAreaView style={style.container}>
      <Header />
      <OrderList
        header={<ListHeader titles={listHeaderTitles} />}
        list={FEEDS.bids}
        type={OrderType.Ask}
      />
      <OrderList
        header={renderHeader()}
        list={FEEDS.asks}
        type={OrderType.Bid}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Orderbook;
