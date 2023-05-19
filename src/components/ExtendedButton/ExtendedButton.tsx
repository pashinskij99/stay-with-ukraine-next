import { CSSProperties, FC, useEffect, useMemo, useState } from 'react';

import { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

import { additionalStyles, presets } from './ExtendedButton.presets';
import {
  ButtonContainer,
  StyledAbsoluteExtendedText,
  StyledExtendedText,
  StyledIcon,
  StyledInvisibleText,
  StylesTextsContainer,
} from './ExtendedButton.styles';
import { IExtendedButtonProps } from './ExtendedButton.types';

export const ExtendedButton: FC<IExtendedButtonProps> = ({
  link,
  title,
  icon,
  titleStyle,
  preset = 'primary',
  isDisabled,
  onClick,
}) => {
  const locale = getLocale();
  const [mounted, setMounted] = useState(false);

  const containerStyles: CSSProperties = useMemo(
    () => ({
      ...presets[preset],
      ...(isDisabled
        ? additionalStyles[`${preset}DisabledPresetContainer`]
        : {}),
    }),
    [preset, isDisabled],
  );

  const titleStyles: CSSProperties = useMemo(
    () => ({
      ...additionalStyles[`${preset}PresetTitle`],
      ...(isDisabled ? additionalStyles[`${preset}DisabledPresetTitle`] : {}),
      ...titleStyle,
    }),
    [preset, isDisabled, titleStyle],
  );

  const getHoverColor = () => {
    switch (preset) {
      case 'inputTextButton':
        return COLORS.BLACK;

      default:
        return COLORS.YELLOW;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ButtonContainer
      href={link || 'none'}
      prefetch={false}
      onClick={onClick}
      hoverColor={getHoverColor()}
      style={containerStyles}
    >
      {title && (
        <StylesTextsContainer>
          <StyledInvisibleText style={titleStyles}>{title}</StyledInvisibleText>
          <StyledExtendedText style={titleStyles}>{title}</StyledExtendedText>
          <StyledAbsoluteExtendedText style={titleStyles}>
            {title}
          </StyledAbsoluteExtendedText>
        </StylesTextsContainer>
      )}
      {icon && <StyledIcon src={icon} alt='button icon' />}
    </ButtonContainer>
  );
};
