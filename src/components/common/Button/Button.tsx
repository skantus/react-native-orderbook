import styles from './styles';
import React, { ReactElement } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'src/theme';

type Props = {
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress }: Props): ReactElement => {
  const { theme } = useTheme();
  const style = styles(theme);

  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      <Text style={style.text} testID="text">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
