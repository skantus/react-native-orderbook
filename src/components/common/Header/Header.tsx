import styles from './styles';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'src/theme';

const Header = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const style = styles(theme);

  return (
    <View style={style.container} testID="header">
      <Text style={style.title}>Order Book</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={style.text}>{isDark ? 'dark' : 'light'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
