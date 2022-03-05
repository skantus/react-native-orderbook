import Orderbook from './components/Orderbook';
import { ThemeProvider } from './theme/theme-provider';
import React from 'react';

const App = () => (
  <ThemeProvider>
    <Orderbook />
  </ThemeProvider>
);

export default App;
