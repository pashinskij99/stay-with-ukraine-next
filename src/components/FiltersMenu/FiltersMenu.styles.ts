import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

type MenuState = {
  isOpen: boolean;
};

export const StyledBurgerMenu = styled.div<MenuState>`
  position: fixed;
  top: 0;
  left: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  bottom: 0;
  right: 35px;
  display: flex;
  background-color: ${COLORS.WHITE};
  flex-direction: column;
  min-height: 100vh;
  padding: 20px 80px;
  z-index: 999;
  padding: 24px 20px;
  justify-content: space-between;
  width: 90%;
  transition: left 0.5s ease-in-out;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 500px) {
    margin-bottom: 11px;
  }
`;

export const StyledTitle = styled.span`
  font-family: 'Pragmatica-Black', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: ${COLORS.BLACK};
`;

export const StyledIcon = styled(Image)`
  width: 21px;
  height: 21px;
`;

export const StyledFilterButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFilterContainer = styled.div`
  min-width: 80%;
  margin: 10px 0;

  @media screen and (max-width: 500px) {
    margin: 13px 0;
    height: 48px;
  }
`;

export const StyledApplyButtonContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${COLORS.YELLOW};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  margin-top: 13px;
`;

export const StyledText = styled(ExtendedText)`
  color: ${COLORS.BLACK};
  text-transform: uppercase;
`;

export const StyledTransparentBlock = styled.div<MenuState>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 10%;
  height: 100vh;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 0;
`;
