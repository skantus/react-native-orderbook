import styles from './styles';
import React from 'react';
import { View } from 'react-native';
import Button from 'src/components/common/Button';
import { useTheme } from 'src/theme';

const Footer = () => {
  const { toggleTheme } = useTheme();

  return (
    <View style={styles.container} testID="footer">
      <Button onPress={toggleTheme} title="Toggle Feed" />
    </View>
  );
};

export default Footer;
