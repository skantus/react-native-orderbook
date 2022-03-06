import ListHeader from './ListHeader';
import { render } from '@testing-library/react-native';
import React from 'react';

describe('ListHeader', () => {
  it('should render correctly', () => {
    const { queryByTestId } = render(
      <ListHeader titles={['title1', 'title2', 'title3']} />,
    );

    const component = queryByTestId('listHeader');

    expect(component?.props.children).toBeTruthy();
    expect(component?.props.children.length).toEqual(3);
    expect(component?.props.testID).toEqual('listHeader');
  });
});
