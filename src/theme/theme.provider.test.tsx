import { ThemeProvider } from './theme-provider';
import { dark, light } from './themes';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

const mockDeviceTheme = jest.fn();

describe('Theme Provider', () => {
  describe('light theme', () => {
    beforeEach(() => {
      mockDeviceTheme.mockReturnValue('light');
    });

    it('text has correct theme color', async () => {
      const mockedStyle = {
        text: {
          color: light.$defaultText,
        },
      };

      const { getByText } = render(
        <ThemeProvider>
          <Text style={mockedStyle.text}>Test Light theme</Text>
        </ThemeProvider>,
      );

      const text = getByText('Test Light theme');
      expect(text.props.style.color).toEqual(light.$defaultText);
    });
  });

  describe('dark theme', () => {
    beforeEach(() => {
      mockDeviceTheme.mockReturnValue('dark');
    });

    it('text has correct theme color', async () => {
      const mockedStyle = {
        text: {
          color: dark.$defaultText,
        },
      };

      const { getByText } = render(
        <ThemeProvider>
          <Text style={mockedStyle.text}>Test Dark theme</Text>
        </ThemeProvider>,
      );

      const text = getByText('Test Dark theme');
      expect(text.props.style.color).toEqual(dark.$defaultText);
    });
  });
});
