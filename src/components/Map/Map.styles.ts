import styled from 'styled-components';

import { GeneralH2 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

import { IMAGES } from '#/*';

type ButtonType = {
  lang: 'uk' | 'en';
};

type BackgroundType = {
  isMainPage?: boolean;
};

export const StyledMainContainer = styled.div<BackgroundType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${({ isMainPage }) =>
    !isMainPage && `url(${IMAGES.BACKGROUND_3.default.src})`};
  background-size: 100% 100%;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  @media screen and (max-width: 839px) {
    padding: 64px 40px;
  }

  @media screen and (max-width: 500px) {
    padding: 47px 20px 0 20px;
  }
`;

export const StyledSubtitle = styled(ExtendedText)`
  text-align: center;
  color: ${COLORS.SECONDARY_GREY};
  margin: 18px 0 40px 0;
  text-align: center;

  @media screen and (max-width: 500px) {
    margin: 16px 0 24px 0;
  }
`;

export const StyledMap = styled.div`
  position: relative;
  margin-top: 50px;
  margin-bottom: 100px;
  background-image: url(${IMAGES.MAP.default.src});
  width: 100%;
  height: 45vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
  padding: 0 100px;

  @media screen and (max-width: 839px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 150px;
    background-position: 60% 0;
    background-size: 120% auto;
    padding: 0 15px 30px 15px;
    height: 200px;
  }
`;

export const StyledTitle = styled(GeneralH2)`
  max-width: 800px;
`;
