import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { CustomTextProps } from './text.types';
import { mergeTextStyles } from './text.utils';

export const Text: React.FC<CustomTextProps & RNTextProps> = ({
  variant = 'body',
  weight = 'normal',
  color = '#1a1a1a',
  style,
  children,
  ...props
}) => {
  const mergedStyles = mergeTextStyles(variant, weight, color, style);

  return (
    <RNText {...props} style={mergedStyles}>
      {children}
    </RNText>
  );
};

export default Text;
