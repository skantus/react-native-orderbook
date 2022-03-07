import { StyleSheet } from 'react-native';
import { Theme } from 'src/theme';

const defaultText: { [key: string]: string | number } = {
  flex: 1,
  fontWeight: '600',
  textAlign: 'right',
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    askText: {
      color: theme.$secondary,
      ...defaultText,
    },
    bidText: {
      color: theme.$primary,
      ...defaultText,
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      height: 20,
      justifyContent: 'space-between',
      marginTop: 10,
      paddingRight: 24,
    },
    text: {
      color: theme.$gray,
      ...defaultText,
    },
  });

export default styles;
