import styles from './styles';
import React, { useCallback } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import FEEDS from 'src/api/mocks/feeds';
import Footer from 'src/components/common/Footer';
import Header from 'src/components/common/Header';
import { useTheme } from 'src/theme';
import { keyExtractor } from 'src/utils';

const ITEMS_PER_PAGE = 20;

const Orderbook = () => {
  const { theme } = useTheme();
  const style = styles(theme);

  const renderListHeader = useCallback(() => <View />, []);

  const renderListFooter = useCallback(() => <View />, []);

  const renderItem = useCallback(
    ({ item }: { item: number[] }) => (
      <View style={style.content}>
        <Text style={style.text}>{item[0]}</Text>
        <Text style={style.text}>{item[1]}</Text>
        <Text style={style.text}>{item[0]}</Text>
      </View>
    ),
    [style.content, style.text],
  );

  return (
    <SafeAreaView style={style.container}>
      <Header />
      <FlatList
        ListFooterComponent={renderListFooter}
        ListHeaderComponent={renderListHeader}
        alwaysBounceHorizontal={false}
        contentContainerStyle={style.contentContainerStyle}
        contentInsetAdjustmentBehavior="always"
        data={FEEDS.bids}
        initialNumToRender={ITEMS_PER_PAGE}
        keyExtractor={keyExtractor}
        persistentScrollbar={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.container}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Orderbook;
