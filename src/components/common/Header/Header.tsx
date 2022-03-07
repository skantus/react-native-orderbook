import styles from './styles';
import React, { ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'src/theme';

type Props = {
  title: string;
};

const Header = ({ title }: Props): ReactElement => {
  const { theme, toggleTheme, isDark } = useTheme();
  const style = styles(theme);

  return (
    <View style={style.container} testID="header">
      <Text style={style.title}>{title}</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={style.text}>{isDark ? 'dark' : 'light'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
