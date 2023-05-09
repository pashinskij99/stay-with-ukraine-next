import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

import { IMAGES } from '#/*';

type LangType = {
  lang: 'en' | 'uk';
};

type StyledAnimationBlockType = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  animation?: string;
};

export const StyledMainContainer = styled.div`
  position: relative;
  display: flex;
  padding: 0 130px;
  background-image: url(${IMAGES.BACKGROUND.default.src});
  background-repeat: no-repeat;
  background-size: 100vw 250%;
  overflow: hidden;
  justify-content: space-around;

  @media screen and (max-width: 1000px) {
    padding: 0 80px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    height: auto;
    padding: 0 80px 83px 80px;
  }

  @media screen and (max-width: 500px) {
    padding: 0 20px 83px 20px;
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 241px 44px 147px 0;

  @media screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
    padding-top: 0;
    padding: 0;
  }
`;

export const StyledBottomShadow = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 180px;
  background: linear-gradient(0deg, #111111 0%, rgba(17, 17, 17, 0) 100%);
`;

export const StyledAnimationContainer = styled.div`
  width: 50%;
  position: relative;
  transform-box: fill-box;
  transform-origin: 50% 50%;
  transform: rotate(2deg);
  overflow: hidden;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 700px;
  }

  @media screen and (max-width: 574px) {
    width: 100%;
    height: 441px;
  }
`;

export const StyledAnimationBlock = styled.div<StyledAnimationBlockType>`
  width: 46%;
  margin: 0 2%;
  position: absolute;
  top: ${(props) => (props.top ? props.top : 'unset')};
  bottom: ${(props) => (props.bottom ? props.bottom : 'unset')};
  right: ${(props) => (props.right ? props.right : 'unset')};
  left: ${(props) => (props.left ? props.left : 'unset')};
`;

export const StyledAnimationItem = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  margin: 28px 0;
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: auto;
  }
`;

export const StyledTitle = styled.h1<LangType>`
  font-family: 'Pragmatica-Bold', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 94px;
  line-height: 110px;
  text-transform: uppercase;
  color: ${COLORS.WHITE};

  @media screen and (max-width: 1000px) {
    font-size: 80px;
    line-height: 86px;
  }

  @media screen and (max-width: 900px) {
    font-size: 60px;
    line-height: 64px;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 46px;
    line-height: 56px;
  }
`;

export const StyledSubtitle = styled(ExtendedText)`
  color: ${COLORS.WHITE};
  margin: 24px 0 32px 0;

  @media screen and (max-width: 900px) {
    text-align: center;
    margin: 16px 0;
  }

  @media screen and (max-width: 500px) {
    opacity: 0.7;
  }
`;

export const StyledArrowContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100vw;
  left: 0;
  right: 0;
  bottom: 50px;

  @media screen and (max-width: 500px) {
    bottom: 30px;
  }
`;

export const StyledIcon = styled(Image)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  animation: 1.5s moveBottomAn ease-in infinite alternate;

  @keyframes moveBottomAn {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(15px);
    }
  }
`;
