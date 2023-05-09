import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

type AllFiltersButtonType = {
  isOnTop: boolean;
};

export const StyledMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 114px;
  padding: 32px 0;
  margin: 0 130px;
  background-color: ${COLORS.WHITE};
  border-bottom: 1px solid ${COLORS.LIGHT_GREY};

  @media screen and (max-width: 1400px) {
    justify-content: center;
    margin: 0 80px;
  }

  @media screen and (max-width: 500px) {
    margin: 0 20px;
    padding: 20px 0;
    height: auto;
  }
`;

export const StyledFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  height: 50px;
`;

export const StyledFilterContainer = styled.div`
  min-width: 260px;
  margin: 0 10px;

  @media screen and (max-width: 1100px) {
    margin: 0 5px;
  }

  @media screen and (max-width: 1050px) {
    min-width: 230px;
  }
`;

export const StyledAllFiltersButton = styled.div<AllFiltersButtonType>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 52px;
  width: 335px;
  border-radius: 74px;
  border: 1px solid ${COLORS.LIGHT_GREY};
  background-color: ${COLORS.WHITE};
  z-index: 200;

  ${({ isOnTop }) =>
    isOnTop
      ? `
          position: fixed;
          bottom: 20px;
          background-color: #FFDD00;
        `
      : `
          position: static;
        `}
`;

export const StyledIcon = styled(Image)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  margin-bottom: 4px;
`;

export const StyledText = styled(ExtendedText)`
  text-align: center;
  text-transform: uppercase;
  color: ${COLORS.BLACK};
`;
