import { Theme } from './types';

const dark: Theme = {
  $background: '#131723',
  $text: 'white',
  $gray: '#b5b8be',
  $base: '#1e2735',
  $primary: 'green',
  $secondary: 'red',
  $ternary: '#454d59',
  $brand: '#574dda',
};

const light: Theme = {
  $background: 'white',
  $text: 'black',
  $gray: 'gray',
  $base: 'gray',
  $primary: 'green',
  $secondary: 'red',
  $ternary: 'dimgrey',
  $brand: 'gray',
};

export { dark, light };
