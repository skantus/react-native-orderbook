import { Theme } from './types';

const dark: Theme = {
  $background: '#131723',
  $text: 'white',
  $gray: '#b5b8be',
  $base: '#1e2735',
  $primary: '#33dbb7',
  $primaryLight: '#21877e',
  $secondary: '#f44336',
  $secondaryLight: '#a0606a',
  $ternary: '#454d59',
  $brand: '#574dda',
};

const light: Theme = {
  $background: 'white',
  $text: 'black',
  $gray: 'gray',
  $base: 'gray',
  $primary: 'green',
  $primaryLight: 'lima',
  $secondary: 'red',
  $secondaryLight: '#45212d',
  $ternary: 'dimgrey',
  $brand: 'gray',
};

export { dark, light };
