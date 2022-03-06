import Orderbook from './components/Orderbook';
import { ThemeProvider } from './theme/theme-provider';
import React from 'react';
import { WSProvider } from 'src/api';

const App = () => (
  <WSProvider>
    <ThemeProvider>
      <Orderbook />
    </ThemeProvider>
  </WSProvider>
);

export default App;
