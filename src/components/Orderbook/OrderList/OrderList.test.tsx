import OrderList from './OrderList';
import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import { OrderType } from 'src/components/types';

describe('OrderList', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(
      <OrderList header={<View />} list={[]} type={OrderType.Ask} />,
    );

    const component = queryByTestId('orderList');

    expect(component?.props.children).toBeTruthy();
    expect(component?.props.testID).toEqual('orderList');

    const flatList = queryByTestId('flatList');

    expect(flatList?.props.children).toBeTruthy();
    expect(flatList?.props.testID).toEqual('flatList');
  });
});
