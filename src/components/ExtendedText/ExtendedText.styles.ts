import styled from 'styled-components';

import { TEXT_PRESETS } from './ExtendedText.types';

type TextType = {
  preset: TEXT_PRESETS;
};

const getStyles = (preset: TEXT_PRESETS) => {
  switch (preset) {
    case TEXT_PRESETS.LIGHT_20:
      return `
        font-family: 'MyriadPro-Light', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 26px;
      `;
    case TEXT_PRESETS.SEMIBOLD_15:
      return `
        font-family: 'MyriadPro-Semibold', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 16px;
      `;
    case TEXT_PRESETS.REG_40:
      return `
        font-family: 'MyriadPro-Regular', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 48px;
      `;
    case TEXT_PRESETS.REG_33:
      return `
        font-family: 'MyriadPro-Regular', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 33px;
        line-height: 39px;

        @media screen and (max-width: 500px) {
          font-size: 22px;
          line-height: 26px;
        }
          `;
    case TEXT_PRESETS.REG_30:
      return `
        font-family: 'MyriadPro-Regular', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;

        @media screen and (max-width: 500px) {
          font-size: 22px;
          line-height: 26px;
        }
      `;
    case TEXT_PRESETS.REG_22:
      return `
        font-family: 'MyriadPro-Regular', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
      `;
    case TEXT_PRESETS.REG_18:
      return `
        font-family: 'MyriadPro-Regular', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
      `;
    case TEXT_PRESETS.REG_16:
      return `
        font-family: 'MyriadPro-Regular', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      `;
    case TEXT_PRESETS.REG_14:
      return `
        font-family: 'MyriadPro-Regular', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
      `;
    default:
      return '';
  }
};

export const StyledExtendedText = styled.span<TextType>`
  ${({ preset }) => getStyles(preset)};
`;
