import { StyleSheet } from 'react-native';
import { Theme } from 'src/theme';

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.$background,
      flex: 1,
    },
    content: {
      flexDirection: 'row',
      height: 40,
      justifyContent: 'space-between',
    },
    contentContainerStyle: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    text: {
      color: theme.$defaultText,
    },
  });

export default styles;
