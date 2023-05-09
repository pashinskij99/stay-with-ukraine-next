import { CSSProperties } from 'react';

import { ExtendedButtonPresets } from './ExtendedButton.presets';

export interface IExtendedButtonProps {
  link?: string;
  title?: string;
  icon?: string;
  titleStyle?: CSSProperties;
  preset?: ExtendedButtonPresets;
  isDisabled?: boolean;
  onClick?: () => void;
}
