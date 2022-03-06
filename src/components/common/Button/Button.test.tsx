import Button from './Button';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

const onPressMock = jest.fn();

describe('Button', () => {
  it('should render correctly', () => {
    const { queryByTestId, getByText } = render(
      <Button onPress={onPressMock} title="test" />,
    );

    const text = queryByTestId('text');
    expect(text?.props.children).toEqual('test');
    expect(text?.props.testID).toEqual('text');

    const component = getByText('test');
    fireEvent.press(component);
    expect(onPressMock).toHaveBeenCalled();
  });
});
