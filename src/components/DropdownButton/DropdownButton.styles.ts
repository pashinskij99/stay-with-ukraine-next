import transform from 'lodash/transform';
import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

type LanguageType = {
  isOpenDropdown: boolean;
};

type LangItemType = {
  isSelected?: boolean;
};

export const StyledIcon = styled(Image)<LanguageType>`
  width: 12px;
  height: 12px;
  margin-left: 9px;
  transition: 200ms;
  transform: rotate(${({isOpenDropdown}) => isOpenDropdown ? '180deg' : '0deg'});
`;

export const StyledDropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;
  cursor: pointer;
`;

export const StyledDropdownButton = styled.div`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${COLORS.WHITE};
`;

export const StyledDropdownMenu = styled.div<LanguageType>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  display: ${({ isOpenDropdown }) => (isOpenDropdown ? 'block' : 'none')};
  margin-top: 12px;
  background-color: ${COLORS.BLACK};
  border-radius: 4px;
`;

export const StyledDropdownMenuItem = styled.div`
  padding: 8px 25px;
  cursor: pointer;
`;

export const StyledLangText = styled(ExtendedText)<LangItemType>`
  color: ${({ isSelected }) => (isSelected ? COLORS.YELLOW : COLORS.WHITE)};

  &:hover {
    color: ${COLORS.YELLOW};
  }
`;
