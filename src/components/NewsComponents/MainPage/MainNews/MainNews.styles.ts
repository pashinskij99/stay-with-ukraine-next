import Link from 'next/link';
import styled from 'styled-components';

import { ExtendedText } from '@/components/ExtendedText';
import { GeneralH3 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

type MainContainerType = {
  //! TODO: Type it!
  image: any | string;
}

export const StyledLink = styled(Link)`
  @media screen and (max-width: 1200px) {
    min-width: 100%;
  }
`;

export const StyledMainContainer = styled.div<MainContainerType>`
  background-image: url(${({image}) => image.default.src});
  background-position: 100% 100%;
  background-size: cover;
  position: relative;
  min-width: 648px;
  max-width: 648px;
  height: 482px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;

  @media screen and (max-width: 1300px) {
    min-width: 600px;
    max-width: 600px;
  }

  @media screen and (max-width: 1200px) {
    min-width: 100%;
    height: calc(50vw);
    margin-bottom: 32px;
  }

  @media screen and (max-width: 500px) {
    height: 280px;
    margin-bottom: 32px;
  }
`;

export const StyledTitle = styled(GeneralH3)`
  margin-top: 16px;
  z-index: 100;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  -webkit-box-pack: center;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  transition: max-height 1s linear;
  overflow: hidden;
`;

export const StyledSecondaryInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

export const StyledTagText = styled(ExtendedText)`
  color: ${COLORS.WHITE};
  z-index: 100;
  background-color: ${COLORS.DARK_GREY};
  border-radius: 4px;
  padding: 2px 8px;
`;

export const StyledData = styled(ExtendedText)`
  color: ${COLORS.WHITE};
  text-align: center;
  z-index: 100;
`;
