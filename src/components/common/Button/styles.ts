import { StyleSheet } from 'react-native';
import { Theme } from 'src/theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.$brand,
      borderRadius: 5,
      paddingHorizontal: 30,
      paddingVertical: 10,
    },
    text: {
      color: theme.$defaultText,
      fontSize: 16,
      fontWeight: '700',
    },
  });

export default styles;
