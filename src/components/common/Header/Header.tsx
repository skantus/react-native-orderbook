import styles from './styles';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyle } from 'src/hooks';
import { useTheme } from 'src/theme';

const Header = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  const containerStyle = useStyle(
    () => [styles.container, { borderBottomColor: theme.$ternary }],
    [theme.$ternary],
  );

  const textStyle = useStyle(
    () => ({ color: theme.$defaultText }),
    [theme.$defaultText],
  );

  return (
    <View style={containerStyle}>
      <Text style={[textStyle, styles.headerTitle]}>Order Book</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={textStyle}>{isDark ? 'dark' : 'light'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
