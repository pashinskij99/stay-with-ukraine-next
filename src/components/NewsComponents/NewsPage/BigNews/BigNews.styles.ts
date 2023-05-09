import Image from 'next/image';
import styled from 'styled-components';

import { ExtendedText } from '@/components/ExtendedText';
import { GeneralH3 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

export const StyledMainNewsContainer = styled.div`
  display: flex;
  min-width: 100%;
  height: 366px;

  @media screen and (max-width: 1260px) {
    height: 386px;
  }

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    height: auto;
  }
`;

export const StyledImageContainer = styled.div`
  width: 560px;
  min-width: 560px;
  height: 100%;
  flex: 1;

  @media screen and (max-width: 1150px) {
    width: 100%;
    min-width: auto;
  }

  @media screen and (max-width: 1150px) {
    margin-bottom: -4px;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledNewsInfoContainer = styled.div`
  flex: 1.3;
  height: 100%;
  padding: 50px 32px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.BLACK};

  @media screen and (max-width: 1340px) {
    padding: 30px 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px 16px;
  }
`;

export const StyledNewsMetaContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTagContainer = styled.div`
  background-color: ${COLORS.DARK_GREY};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  padding: 2px 8px;
`;

export const StyledTagText = styled(ExtendedText)`
  color: ${COLORS.WHITE};
`;

export const StyledDateText = styled(ExtendedText)`
  color: ${COLORS.SECONDARY_GREY};
`;

export const StyledNewsTitle = styled(GeneralH3)`
  align-items: center;
  margin: 16px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  -webkit-box-pack: center;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  transition: max-height 1s linear;
  overflow: hidden;

  @media screen and (max-width: 1340px) {
    margin: 16px 0;
  }

  @media screen and (max-width: 500px) {
    -webkit-line-clamp: 3;
  }
`;

export const StyledNewsSubtitle = styled(ExtendedText)`
  display: flex;
  align-items: center;
  color: ${COLORS.WHITE};
`;

export const StyledReadMoreContainer = styled.div`
  display: flex;
  margin-top: 21px;
  align-items: center;
  
  &:hover img {
    transform: translateX(10px);
  }
`;

export const StyledArrowIcon = styled(Image)`
  width: 18px;
  height: 18px;
  margin-left: 8px;
  margin-bottom: 3px;
  transition: 0.5s;
`;

export const StyledReadMoreText = styled(ExtendedText)`
  text-transform: uppercase;
  color: ${COLORS.WHITE};
`;
