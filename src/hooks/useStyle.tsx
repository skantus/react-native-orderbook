import { DependencyList, useMemo } from 'react';
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

/*
 * A hook to memoize a style. Uses `ViewStyle` by default.
 * Can be used with other styles deriving from `FlexStyle` as well, such as `TextStyle`.
 */

export const useStyle = <
  TStyle extends ViewStyle | TextStyle | ImageStyle,
  TOutput extends StyleProp<TStyle>,
>(
  styleFactory: () => TOutput,
  deps?: DependencyList,
): TOutput =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(styleFactory, deps);
