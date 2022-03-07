import OrderItem from './OrderItem';
import { render } from '@testing-library/react-native';
import React from 'react';
import { OrderType } from 'src/components/types';

describe('OrderItem', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(
      <OrderItem
        index={0}
        item={{ price: 0, size: 0, total: 0 }}
        type={OrderType.Ask}
      />,
    );

    const component = queryByTestId('orderItem');

    expect(component?.props.children).toBeTruthy();
    expect(component?.props.testID).toEqual('orderItem');
  });
});
