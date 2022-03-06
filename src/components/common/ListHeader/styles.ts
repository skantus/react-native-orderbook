import { StyleSheet } from 'react-native';
import { Theme } from 'src/theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    headerContent: {
      backgroundColor: theme.$background,
      borderBottomColor: theme.$base,
      borderBottomWidth: 0.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      paddingVertical: 5,
    },
    headerText: {
      color: theme.$ternary,
      fontWeight: '700',
    },
  });

export default styles;
