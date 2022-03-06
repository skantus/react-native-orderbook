import Orderbook from './Orderbook';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('Orderbook', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(<Orderbook />);

    const component = queryByTestId('orderbook');

    expect(component?.props.children).toBeTruthy();
    expect(component?.props.testID).toEqual('orderbook');
  });
});
