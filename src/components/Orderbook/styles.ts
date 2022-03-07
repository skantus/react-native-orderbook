import { StyleSheet } from 'react-native';
import { Theme } from 'src/theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.$background,
      flex: 1,
    },
    spreadText: {
      backgroundColor: theme.$background,
      color: theme.$ternary,
      fontSize: 15,
      fontWeight: '700',
      paddingHorizontal: 40,
      paddingVertical: 5,
      textAlign: 'center',
    },
  });

export default styles;
