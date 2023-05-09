import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

export const StyledItemContainer = styled.div`
  padding: 32px;
  border: 1px solid ${COLORS.LIGHT_GREY};
  outline: 1px solid ${COLORS.LIGHT_GREY};
  min-height: 333px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px 0;
  box-sizing: border-box;

  @media screen and (max-width: 1355px) {
    min-height: 370px;
  }

  @media screen and (max-width: 1233px) {
    min-height: 400px;
  }

  @media screen and (max-width: 1156px) {
    min-height: 333px;
  }

  @media screen and (max-width: 839px) {
    padding: 22px;
    margin: 32px 0 15px 0;
  }
`;

export const StyledExtendedText = styled(ExtendedText)`
  color: ${COLORS.BLACK};

  @media screen and (max-width: 375px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

export const StyledAuthorContainer = styled.div`
  display: flex;

  @media screen and (max-width: 839px) {
    margin-top: 24px;
  }
`;

export const StyledImage = styled(Image)``;

export const StyledAuthorTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 16px;
`;

export const StyledAuthorName = styled.span`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: ${COLORS.BLACK};

  @media screen and (max-width: 375px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

export const StyledAuthorSubName = styled.span`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${COLORS.SECONDARY_GREY};

  @media screen and (max-width: 375px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
