import { CSSProperties } from 'react';

import { COLORS } from '@/utils/colors';

const BASE: CSSProperties = {
  padding: '21px 37px',
  borderRadius: '60px',
  backgroundColor: 'transparent',
  border: `2px solid ${COLORS.YELLOW}`,
  cursor: 'pointer',
  fontWeight: 'bold',
  fontFamily: "'MyriadPro-Regular', sans-serif",
  fontSize: '18px',
  lineHeight: '18px',
  textTransform: 'uppercase',
};

interface IExtendedButtonStyles {
  primary: CSSProperties;
  yellowSmall: CSSProperties;
  yellowBig: CSSProperties;
  inputTextButton: CSSProperties;
  inputIconButton: CSSProperties;
}

interface IExtendedButtonAdditionalStyles {
  primaryPresetTitle: CSSProperties;
  primaryDisabledPresetTitle: CSSProperties;
  primaryDisabledPresetContainer: CSSProperties;

  yellowSmallPresetTitle: CSSProperties;
  yellowSmallDisabledPresetTitle: CSSProperties;
  yellowSmallDisabledPresetContainer: CSSProperties;

  yellowBigPresetTitle: CSSProperties;
  yellowBigDisabledPresetTitle: CSSProperties;
  yellowBigDisabledPresetContainer: CSSProperties;

  inputTextButtonPresetTitle: CSSProperties;
  inputTextButtonDisabledPresetTitle: CSSProperties;
  inputTextButtonDisabledPresetContainer: CSSProperties;

  inputIconButtonPresetTitle: CSSProperties;
  inputIconButtonDisabledPresetTitle: CSSProperties;
  inputIconButtonDisabledPresetContainer: CSSProperties;
}

export type ExtendedButtonPresets = keyof IExtendedButtonStyles;

export const additionalStyles: IExtendedButtonAdditionalStyles = {
  primaryPresetTitle: {
    color: COLORS.WHITE,
  },
  primaryDisabledPresetTitle: {
    color: COLORS.WHITE,
  },
  primaryDisabledPresetContainer: {
    backgroundColor: 'transparent',
    borderColor: COLORS.DARK_GREY,
  },

  yellowSmallPresetTitle: {
    color: COLORS.BLACK,
  },
  yellowSmallDisabledPresetTitle: {
    color: COLORS.BLACK,
  },
  yellowSmallDisabledPresetContainer: {
    backgroundColor: COLORS.DARK_GREY,
    borderColor: COLORS.DARK_GREY,
  },

  yellowBigPresetTitle: {
    color: COLORS.BLACK,
  },
  yellowBigDisabledPresetTitle: {},
  yellowBigDisabledPresetContainer: {},

  inputTextButtonPresetTitle: {
    color: COLORS.WHITE,
  },
  inputTextButtonDisabledPresetTitle: {
    color: COLORS.WHITE,
  },
  inputTextButtonDisabledPresetContainer: {
    backgroundColor: COLORS.BLACK,
  },

  inputIconButtonPresetTitle: {},
  inputIconButtonDisabledPresetTitle: {},
  inputIconButtonDisabledPresetContainer: {
    backgroundColor: COLORS.BLACK,
  },
};

export const presets: IExtendedButtonStyles = {
  primary: {
    ...BASE,
  },

  yellowSmall: {
    ...BASE,
    backgroundColor: COLORS.YELLOW,
    border: 'none',
    padding: '14px 24px',
    fontSize: '15px',
    lineHeight: '16px',
  },

  yellowBig: {
    ...BASE,
    backgroundColor: COLORS.YELLOW,
    border: 'none',
    padding: '23px auto',
  },

  inputTextButton: {
    ...BASE,
    backgroundColor: COLORS.BLACK,
    border: 'none',
    padding: '17px 25px',
    width: 'auto'
  },

  inputIconButton: {
    ...BASE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    backgroundColor: COLORS.BLACK,
    padding: '0px',
    minHeight: '100%'
  }
};
