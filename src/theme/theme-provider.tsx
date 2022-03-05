import { dark, light } from './themes';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'react-native';

const ThemeContext = createContext({
  isDark: true,
  theme: dark,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [isDark, setIsDark] = useState(isDarkMode);

  const toggleTheme = useCallback(() => setIsDark(!isDark), [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        theme: isDark ? dark : light,
        toggleTheme,
      }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
