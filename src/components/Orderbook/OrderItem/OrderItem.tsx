import styles from './styles';
import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { FeedType } from 'src/api';
import { OrderType } from 'src/components/types';
import { useTheme } from 'src/theme';
import { numberFormat } from 'src/utils/numberFormat';

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
        <Text style={textStyle}>{numberFormat(2).format(item?.price)}</Text>
        <Text style={style.text}>{numberFormat().format(item?.size)}</Text>
        <Text style={style.text}>{numberFormat().format(item?.total)}</Text>
      </View>
    </>
  );
};

export default OrderItem;
