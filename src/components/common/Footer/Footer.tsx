import styles from './styles';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import Button from 'src/components/common/Button';

type Props = {
  buttonTitle: string;
  onPressButton: () => void;
};

const Footer = ({ buttonTitle, onPressButton }: Props): ReactElement => (
  <View style={styles.container} testID="footer">
    <Button onPress={onPressButton} title={buttonTitle} />
  </View>
);

export default Footer;
