import { StyleSheet } from 'react-native';
import { Theme } from 'src/theme';

const defaultText: { [key: string]: string | number } = {
  flex: 1,
  fontWeight: '600',
  textAlign: 'right',
};

const defaultBarChart: { [key: string]: string | number } = {
  flex: 1,
  height: 27,
  position: 'absolute',
  opacity: 0.5,
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    askText: {
      color: theme.$secondary,
      ...defaultText,
    },
    asksBarChart: {
      backgroundColor: theme.$secondaryLight,
      ...defaultBarChart,
    },
    bidText: {
      color: theme.$primary,
      ...defaultText,
    },
    bidsBarChart: {
      backgroundColor: theme.$primaryLight,
      ...defaultBarChart,
    },
    content: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 24,
      paddingVertical: 5,
    },
    text: {
      color: theme.$gray,
      ...defaultText,
    },
  });

export default styles;
