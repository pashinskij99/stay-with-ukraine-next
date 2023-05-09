import Image from 'next/image';
import styled from 'styled-components';

import { ExtendedText } from '@/components/ExtendedText';
import { COLORS } from '@/utils/colors';

type containerType = {
  isSecond?: boolean;
};

export const StyledSecondaryNewsContainer = styled.div<containerType>`
  display: flex;
  padding: 20px 0;
  border-top: 1px solid ${COLORS.LIGHT_GREY};
  border-bottom: 1px solid ${COLORS.LIGHT_GREY};
  box-sizing: border-box;
  outline-style: solid none solid none;
  margin-top: -1px;

  @media screen and (max-width: 1200px) {
    padding: 32px 0;
  }

  @media screen and (max-width: 500px) {
    padding: 20px 0;
  }
`;

export const StyledImage = styled(Image)`
  min-width: 116px;
  height: 69px;
`;

export const StyledSecondaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const StyledTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.LIGHT_GREY_3};
  border-radius: 4px;
  padding: 2px 8px;
  margin-right: 16px;

  @media only screen and (min-width: 1101px) and (max-width: 1127px) {
    margin-right: 5px;
  }

  @media screen and (max-width: 500px) {
    margin-right: 5px;
  }
`;

export const StyledTagText = styled(ExtendedText)`
  color: ${COLORS.BLACK};
`;

export const StyledData = styled(ExtendedText)`
  color: ${COLORS.SECONDARY_GREY};
  text-align: center;
`;

export const StyledTitle = styled.h5`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${COLORS.BLACK};
  margin-top: 6px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  transition: max-height 1s linear;
  overflow: hidden;
`;
