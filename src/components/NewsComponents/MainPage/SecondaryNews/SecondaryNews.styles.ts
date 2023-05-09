import Image from 'next/image';
import styled from 'styled-components';

import { ExtendedText } from '@/components/ExtendedText';
import { COLORS } from '@/utils/colors';

type containerType = {
  isSecond?: boolean;
  number?: number;
};

const getPadding = ( number?: number) => {
  if(number === 0) return '0 0 32px 0';
  if(number === 1) return '32px 0 32px 0';
  if(number === 2) return '32px 0 0 0'
}

export const StyledSecondaryNewsContainer = styled.div<containerType>`
  display: flex;
  padding: ${({ number }) => getPadding(number)};
  border-top: ${({ isSecond }) =>
    isSecond ? `1px solid rgba(255,255,255, 0.1)` : 'none'};
  border-bottom: ${({ isSecond }) =>
    isSecond ? `1px solid rgba(255,255,255, 0.1)` : 'none'};

  @media screen and (max-width: 1200px) {
    padding: 32px 0;
    box-sizing: border-box;
  }

  @media screen and (max-width: 500px) {
    align-items: flex-start;
    border-bottom: ${({ number }) =>
    number === 2 && 'none'};
  }
`;

export const StyledImageContainer = styled.div`
  width: 170px;
  height: 114px;
  position: relative;
  flex-shrink: 0;

  @media screen and (max-width: 500px) {
    width: 100px;
    height: 68px;
  }
`;

export const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledSecondaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;

  @media screen and (max-width: 500px) {
    margin-left: 16px;
  }
`;

export const StyledTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.DARK_GREY};
  border-radius: 4px;
  padding: 2px 8px;
  margin-right: 16px;

  @media screen and (max-width: 500px) {
    margin-right: 16px;
  }
`;

export const StyledTagText = styled(ExtendedText)`
  color: ${COLORS.WHITE};
`;

export const StyledData = styled(ExtendedText)`
  color: ${COLORS.SECONDARY_GREY};
  text-align: center;
`;

export const StyledTitle = styled.h5`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: ${COLORS.WHITE};
  margin-top: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  -webkit-box-pack: center;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  transition: max-height 1s linear;
  overflow: hidden;
`;
