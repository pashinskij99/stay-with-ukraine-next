import React from 'react';

import { StyledExtendedText } from './ExtendedText.styles';
import { ExtendedTextProps } from './ExtendedText.types';

export const ExtendedText: React.FC<ExtendedTextProps> = ({
  style,
  preset,
  children,
  ...rest
}) => {
  return (
    <StyledExtendedText preset={preset} {...rest} style={style && style}>
      {children}
    </StyledExtendedText>
  );
};
