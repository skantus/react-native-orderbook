import OrderItem from '../OrderItem';
import styles from './styles';
import React, { ReactElement, ReactNode, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { OrderItemType, OrderType } from 'src/components/types';
import { keyExtractor } from 'src/utils';

type Props = {
  list: number[][];
  type: OrderType;
  header: ReactNode;
};

const OrderList = ({ list, type, header }: Props): ReactElement => {
  const renderItem = useCallback(
    ({ item, index }: OrderItemType) => (
      <OrderItem index={index} item={item} type={type} />
    ),
    [type],
  );

  return (
    <View style={styles.container} testID="orderList">
      {header}
      <FlatList
        alwaysBounceHorizontal={false}
        contentInsetAdjustmentBehavior="always"
        data={list}
        inverted={type === OrderType.Ask}
        keyExtractor={keyExtractor}
        persistentScrollbar={true}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      />
    </View>
  );
};

export default OrderList;
