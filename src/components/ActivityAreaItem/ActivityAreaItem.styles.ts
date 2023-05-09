import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

type AreaType = {
  isOpen: boolean;
  isLastIndex?: boolean;
};

export const StyledActivityAreaItemContainer = styled.div<AreaType>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 32px 0;
  border-top: 1px solid ${COLORS.LIGHT_GREY};
  border-bottom: ${({ isLastIndex }) =>
    isLastIndex ? 'none' : `1px solid ${COLORS.LIGHT_GREY}`};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledImageContainer = styled.div`
  width: 40%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const StyledActivityAreaImage = styled(Image)`
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;

  @media screen and (max-width: 1024px) {
    width: 90vw;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const StyledActivityAreaTextContainer = styled.div`
  padding: 0 40px;
  display: flex;
  min-width: 60%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    padding: 0 0 20px;
    margin-top: 24px;
    min-width: auto;
  }
`;

export const StyledActivityAreaTitle = styled(ExtendedText)`
  color: ${COLORS.BLACK};
  margin-bottom: 15px;
  text-align: left;
`;

export const StyledActivityAreaText = styled(ExtendedText)<AreaType>`
  position: relative;
  color: ${COLORS.BLACK};
  ${({ isOpen }) => !isOpen && `display: -webkit-box;`}
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  transition: max-height 1s linear;

  ::after {
    transform: rotate(180deg);
    content: '';
    position: absolute;
    height: 10px;
    width: 100%;
    bottom: -10px;
    left: 0;
    background-color: ${COLORS.WHITE};

    @media screen and (max-width: 1024px) {
      bottom: -20px;
      height: 20px;
    }
  }

  @media screen and (max-width: 1024px) {
    -webkit-line-clamp: 4;
  }

  @media screen and (max-width: 500px) {
    -webkit-line-clamp: 3;
  }
`;

export const StyledArrowContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 50%;
  left: 50%;
  right: 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
    left: 0;
  }
`;

export const StyledArrowIcon = styled(Image)<AreaType>`
  transform: translateX(50%)
    rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
  padding-right: 2px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    right: 50%;
  }
`;

export const StyledTextWrapper = styled.span`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;

  @media screen and (max-width: 500px) {
    font-size: 22px;
    line-height: 26px;
  }
`;
