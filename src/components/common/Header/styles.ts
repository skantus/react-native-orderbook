import { StyleSheet } from 'react-native';
import { Theme } from 'src/theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      borderBottomColor: theme.$ternary,
      borderBottomWidth: 1,
      flexDirection: 'row',
      height: 40,
      justifyContent: 'space-between',
      paddingHorizontal: 24,
    },
    image: {
      height: 20,
      width: 20,
    },
    subTitle: {
      color: theme.$ternary,
      fontSize: 10,
    },
    text: {
      color: theme.$gray,
      fontSize: 12,
    },
    title: {
      color: theme.$gray,
      fontSize: 16,
      fontWeight: '700',
      marginRight: 10,
    },
    titleContent: {
      flexDirection: 'row',
    },
  });

export default styles;
