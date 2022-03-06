import styles from './styles';
import React, { ReactElement } from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from 'src/theme';

type Props = {
  title: string;
  image: ImageSourcePropType;
};

const Header = ({ title, image }: Props): ReactElement => {
  const { theme, toggleTheme, isDark } = useTheme();
  const style = styles(theme);

  return (
    <View style={style.container} testID="header">
      <View style={style.titleContent}>
        <Text style={style.title}>{title}</Text>
        <Image source={image} style={style.image} />
      </View>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={style.text}>{isDark ? 'dark' : 'light'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
