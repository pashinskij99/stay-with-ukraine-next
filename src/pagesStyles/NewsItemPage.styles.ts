import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { ExtendedText } from '@/components';
import { COLORS } from '@/utils/colors';

export const StyledMainContainer = styled.div`
  padding: 153px 130px 80px 130px;

  @media screen and (max-width: 1350px) {
    padding: 153px 80px 80px 80px;
  }

  @media screen and (max-width: 1250px) {
    padding: 153px 20px 80px 20px;
  }

  @media screen and (max-width: 1200px) {
    padding: 153px 100px 80px 100px;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }

  @media screen and (max-width: 900px) {
    padding: 153px 80px 60px 80px;
  }

  @media screen and (max-width: 900px) {
    padding: 153px 20px 60px 20px;
  }

  @media screen and (max-width: 500px) {
    padding: 105px 20px 60px 20px;
  }
`;

export const StyledBackContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1px 0;
  height: 18px;
  gap: 8px;
`;

export const StyledIcon = styled(Image)`
  width: 18px;
  height: 18px;
  margin-bottom: 3px;
`;

export const StyledBackText = styled(ExtendedText)`
  text-transform: uppercase;
  color: #000000;
`;

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    margin-right: 0;
  }
`;

export const StyledAlsoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  box-sizing: border-box;
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid ${COLORS.LIGHT_GREY};

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    border-top: none;
    margin-top: 0;
    padding-top: 30px;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  margin: 33px 0;

  @media screen and (max-width: 500px) {
    min-width: 100vw;
    margin: 24px -20px 33px -20px;
    max-height: 198px;
  }
`;

export const StyledDataText = styled(ExtendedText)`
  color: ${COLORS.SECONDARY_GREY};
`;

export const StyledTitle = styled.h2`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: ${COLORS.BLACK};
  margin: 16px 0 8px 0;

  @media screen and (max-width: 500px) {
    font-size: 28px;
    line-height: 34px;
    margin: 16px 0 0 0;
  }
`;

export const StyledText = styled.p`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: ${COLORS.BLACK};
  margin: 16px 0 16px 0;
  display: inline;
`;

export const StyledReadAlsoText = styled(ExtendedText)`
  display: flex;
  align-items: center;
  color: ${COLORS.BLACK};
`;

export const StyledNewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    grid-gap: 0px;
  }
`;

type StyledPersonsContainerType = {
  isSmallWidth?: boolean | 0;
};

export const StyledPersonsContainer = styled.div<StyledPersonsContainerType>`
  margin-bottom: 20px;
`;

export const StyledShareBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;
  gap: 25px;
`;

export const StyledShareText = styled(ExtendedText)`
  display: flex;
  align-items: center;
  color: ${COLORS.SECONDARY_GREY};
`;

export const StyledShareIcon = styled(Image)`
  width: 22px;
  height: 22px;
`;

export const StyledNameText = styled.span`
  color: blue;
  display: inline;
`;

export const StyledSeeAllNewsContainer = styled.div`
  display: flex;
  justify-content: start;
`;

export const StyledNewsLink = styled(Link)`
  @media screen and (max-width: 500px) {
    margin-bottom: 17px;
  }
`;

export const StyledReadAlsoTitlesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
