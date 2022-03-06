import Header from './Header';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('Header', () => {
  it('should render correctly', () => {
    const { queryByTestId, getByText } = render(<Header />);

    const component = queryByTestId('header');

    expect(component?.props.children).toBeTruthy();
    expect(component?.props.testID).toEqual('header');

    const button = getByText('dark');
    expect(button.props.children).toEqual('dark');
  });
});
