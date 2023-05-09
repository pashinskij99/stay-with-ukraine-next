import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

type LinkType = {
  isselected?: string;
};

type HeaderType = {
  isOpen: boolean;
  headerStyle?: 'transparent' | 'black';
};

type ButtonType = {
  lang: 'uk' | 'en';
};

export const StyledGradient = styled.div<HeaderType>`
  display: ${({ isOpen }) => (!isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 130px;
  background: linear-gradient(180deg, #111111 0%, rgba(17, 17, 17, 0) 100%);
`;

const getHeaderColor = (
  isOpen: boolean,
  headerStyle?: 'transparent' | 'black',
) => {
  if (isOpen) return COLORS.BLACK;
  if (headerStyle === 'black') return COLORS.BLACK;
};

export const StyledHeaderContainer = styled.div<HeaderType>`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 40px 130px 40px 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${({ isOpen, headerStyle }) =>
    getHeaderColor(isOpen, headerStyle)};

  @media screen and (max-width: 1000px) {
    justify-content: space-between;
    padding: 20px 40px;
  }

  @media screen and (max-width: 500px) {
    padding: 20px;
    width: 100%;
  }
`;

export const StyledLogo = styled(Image)`
  margin-right: 60px;
`;

export const StyledHelpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const StyledRoutesContainer = styled.div`
  display: flex;
  align-items: center;
  //! TODO: Uncomment this style when other links in header will be add!
  /* justify-content: space-around; */
  justify-content: start;
  gap: 64px;
`;

export const StyledHeaderLink = styled(Link)<LinkType>`
  position: relative;
  z-index: 100;
  text-transform: uppercase;
  color: ${({ isselected }) =>
    isselected === 'true' ? COLORS.YELLOW : COLORS.WHITE};
  box-shadow: ${({ isselected }) =>
    isselected === 'true' ? `0px 1px 0px ${COLORS.YELLOW}` : 'none'};
  transition: 0.3s;

  &:hover {
    color: ${COLORS.YELLOW};
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${COLORS.YELLOW};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 600;
`;
