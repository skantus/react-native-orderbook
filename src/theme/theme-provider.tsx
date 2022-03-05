import { dark, light } from './themes';
import { Theme } from './types';
import React, { createContext, ReactNode, useContext } from 'react';
import { StatusBarStyle, useColorScheme } from 'react-native';

const ThemeContext = createContext<{
  theme: Theme;
  statusBarStyle: StatusBarStyle;
}>({
  theme: dark,
  statusBarStyle: 'default',
});

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ThemeContext.Provider
      value={{
        theme: isDark ? dark : light,
        statusBarStyle: isDark ? 'dark-content' : 'light-content',
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
