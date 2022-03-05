import 'react-native';
import App from '../App';
import { render } from '@testing-library/react-native';
import React from 'react';

const testId = 'app-id';

describe('renders correctly', () => {
  it('should component to be defined', () => {
    const { getByTestId } = render(<App />);
    const component = getByTestId(testId);
    expect(component).toBeDefined();
  });
});
