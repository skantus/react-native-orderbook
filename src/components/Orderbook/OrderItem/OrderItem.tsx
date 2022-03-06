import styles from './styles';
import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { OrderType } from 'src/components/types';
import { useTheme } from 'src/theme';

type Props = {
  item: number[];
  index: number;
  type: OrderType;
};

const OrderItem = ({ item, index, type }: Props): ReactElement => {
  const { theme } = useTheme();
  const style = styles(theme);
  const textStyle = type === OrderType.Ask ? style.askText : style.bidText;

  return (
    <View key={index} style={style.content} testID="orderItem">
      <Text style={textStyle}>{item[0]}</Text>
      <Text style={style.text}>{item[1]}</Text>
      <Text style={style.text}>{item[0]}</Text>
    </View>
  );
};

export default OrderItem;
