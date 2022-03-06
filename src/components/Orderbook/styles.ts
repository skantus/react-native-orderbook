import { StyleSheet } from 'react-native';
import { Theme } from 'src/theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    askText: {
      color: theme.$secondary,
      fontWeight: '400',
    },
    bidText: {
      color: theme.$primary,
      fontWeight: '400',
    },
    container: {
      backgroundColor: theme.$background,
      flex: 1,
    },
    content: {
      flexDirection: 'row',
      height: 20,
      justifyContent: 'space-between',
      marginTop: 10,
      paddingHorizontal: 24,
    },
    spreadText: {
      color: theme.$ternary,
      fontSize: 15,
      fontWeight: '700',
      paddingVertical: 5,
      textAlign: 'center',
    },
    text: {
      color: theme.$gray,
      fontWeight: '500',
    },
  });

export default styles;
