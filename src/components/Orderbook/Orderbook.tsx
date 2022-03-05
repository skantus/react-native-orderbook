import styles from './styles';
import React, { useCallback } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import FEEDS from 'src/api/mocks/feeds';
import Header from 'src/components/common/Header';
import { useStyle } from 'src/hooks';
import { useTheme } from 'src/theme';
import { keyExtractor } from 'src/utils';

const ITEMS_PER_PAGE = 20;

const Orderbook = () => {
  const { theme } = useTheme();

  const containerStyle = useStyle(
    () => [styles.container, { backgroundColor: theme.$background }],
    [theme.$background],
  );

  const textStyle = useStyle(
    () => [{ color: theme.$defaultText }],
    [theme.$defaultText],
  );

  const renderListHeader = useCallback(() => <View />, []);

  const renderListFooter = useCallback(() => <View />, []);

  const renderItem = useCallback(
    ({ item }: { item: number[] }) => (
      <View style={styles.content}>
        <Text style={textStyle}>{item[0]}</Text>
        <Text style={textStyle}>{item[1]}</Text>
        <Text style={textStyle}>{item[0]}</Text>
      </View>
    ),
    [textStyle],
  );

  return (
    <SafeAreaView style={containerStyle}>
      <Header />
      <FlatList
        ListFooterComponent={renderListFooter}
        ListHeaderComponent={renderListHeader}
        alwaysBounceHorizontal={false}
        contentContainerStyle={styles.contentContainerStyle}
        contentInsetAdjustmentBehavior="always"
        data={FEEDS.bids}
        initialNumToRender={ITEMS_PER_PAGE}
        keyExtractor={keyExtractor}
        persistentScrollbar={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={containerStyle}
      />
    </SafeAreaView>
  );
};

export default Orderbook;
