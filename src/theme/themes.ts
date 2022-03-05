import { Theme } from './types';

const dark: Theme = {
  $backgroundColor: 'black',
  $defaultTextColor: 'white',
  $primaryTextColor: 'green',
  $secondaryTextColor: 'red',
};

const light: Theme = {
  $backgroundColor: 'white',
  $defaultTextColor: 'black',
  $primaryTextColor: 'tomato',
  $secondaryTextColor: 'cyan',
};

export { dark, light };
