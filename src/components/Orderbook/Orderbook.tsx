import styles from './styles';
import React, { useCallback } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import FEEDS from 'src/api/mocks/feeds';
import Footer from 'src/components/common/Footer';
import Header from 'src/components/common/Header';
import ListHeader from 'src/components/common/ListHeader';
import { useTheme } from 'src/theme';
import { keyExtractor } from 'src/utils';

const ITEMS_PER_PAGE = 20;
const stickyHeaderIndices = [0];
const listHeaderTitles = ['PRICE', 'SIZE', 'TOTAL'];

const Orderbook = () => {
  const { theme } = useTheme();
  const style = styles(theme);

  const renderItem = useCallback(
    ({ item, index }: { item: number[]; index: number }) => {
      if (index === 7) {
        return <Text style={style.spreadText}>Spread 13.0 (0.04%)</Text>;
      }

      const textStyle = index <= 6 ? style.askText : style.bidText;
      return (
        <View style={style.content}>
          <Text style={textStyle}>{item[0]}</Text>
          <Text style={style.text}>{item[1]}</Text>
          <Text style={style.text}>{item[0]}</Text>
        </View>
      );
    },
    [style.content, style.text, style.askText, style.bidText, style.spreadText],
  );

  return (
    <SafeAreaView style={style.container}>
      <Header />
      <FlatList
        ListHeaderComponent={<ListHeader titles={listHeaderTitles} />}
        alwaysBounceHorizontal={false}
        contentInsetAdjustmentBehavior="always"
        data={FEEDS.bids}
        initialNumToRender={ITEMS_PER_PAGE}
        keyExtractor={keyExtractor}
        persistentScrollbar={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={stickyHeaderIndices}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Orderbook;
