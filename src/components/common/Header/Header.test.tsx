import Header from './Header';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('Header', () => {
  it('should render correctly', () => {
    const { queryByTestId, getByText } = render(<Header title="test" />);

    const component = queryByTestId('header');

    expect(component?.props.children).toBeTruthy();
    expect(component?.props.testID).toEqual('header');

    const button = getByText('light');
    expect(button.props.children).toEqual('light');
  });
});
