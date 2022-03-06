import Footer from './Footer';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('Footer', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(
      <Footer buttonTitle="test" onPressButton={jest.fn()} />,
    );

    const component = queryByTestId('footer');

    expect(component?.props.children).toBeTruthy();
    expect(component?.props.testID).toEqual('footer');
  });
});
