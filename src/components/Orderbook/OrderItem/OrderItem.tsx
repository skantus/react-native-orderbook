import styles from './styles';
import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { FeedType } from 'src/api';
import { OrderType } from 'src/components/types';
import { useTheme } from 'src/theme';

type Props = {
  item: FeedType;
  index: number;
  type: OrderType;
};

const OrderItem = ({ item, index, type }: Props): ReactElement => {
  const { theme } = useTheme();
  const style = styles(theme);
  const textStyle = type === OrderType.Ask ? style.askText : style.bidText;
  const barChartStyle =
    type === OrderType.Ask ? style.asksBarChart : style.bidsBarChart;

  return (
    <>
      <View style={[barChartStyle, { width: item?.percent }]} />
      <View key={index} style={style.content} testID="orderItem">
        <Text style={textStyle}>{item?.price}</Text>
        <Text style={style.text}>{item?.size}</Text>
        <Text style={style.text}>{item?.total}</Text>
      </View>
    </>
  );
};

export default OrderItem;
