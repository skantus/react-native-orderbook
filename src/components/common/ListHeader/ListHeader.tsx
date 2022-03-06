import styles from './styles';
import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'src/theme';

type Props = {
  titles: string[];
};

const ListHeader = ({ titles }: Props): ReactElement => {
  const { theme } = useTheme();
  const style = styles(theme);

  return (
    <View style={style.headerContent} testID="listHeader">
      {titles.map((item, index) => (
        <Text key={index} style={style.headerText}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default ListHeader;
