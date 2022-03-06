import { dark, light } from './themes';
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { StatusBar } from 'react-native';

const ThemeContext = createContext({
  isDark: true,
  theme: dark,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(true);

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
