import Link from 'next/link';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

type MenuState = {
  isOpen: boolean;
};

type StyledBurgerLinkType = {
  isSelected: boolean;
  isHelpLink?: boolean;
};

export const BurgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const StyledBurgerMenu = styled.div<MenuState>`
  position: absolute;
  top: 60px;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  background-color: ${COLORS.BLACK};
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  padding: 80px 40px;

  @media screen and (max-width: 500px) {
    padding: 80px 20px;
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledBurgerLink = styled(Link)<StyledBurgerLinkType>`
  color: ${({ isSelected }) => (isSelected ? COLORS.YELLOW : COLORS.WHITE)};
  font-family: 'Pragmatica-Medium', sans-serif;
  font-size: 26px;
  font-weight: 400;
  line-height: 38px;
  text-transform: uppercase;
  padding: 0 24px;

  &:hover {
    color: ${COLORS.YELLOW};
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
    line-height: 38px;
  }
`;

export const StyledHelpContainer = styled.div<StyledBurgerLinkType>`
  border-radius: 60px;
  padding: 14px 24px;
  background-color: ${COLORS.YELLOW};
  display: inline-block;
`;

export const StyledHelpText = styled.span`
  color: ${COLORS.BLACK};
  font-family: 'Pragmatica-Medium', sans-serif;
  font-size: 26px;
  font-weight: 400;
  line-height: 38px;
  text-transform: uppercase;
`;

export const StyledLangContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1100px) {
    margin-bottom: 150px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 80px;
  }
`;

export const StyledLangText = styled(ExtendedText)`
  color: ${COLORS.SECONDARY_GREY};
  margin-right: 16px;
`;
