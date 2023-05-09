import Image from 'next/image';
import styled from 'styled-components';

import { ExtendedText } from '@/components/ExtendedText';
import { COLORS } from '@/utils/colors';

type NewsType = {
  isInNewsItem?: boolean
}

export const StyledItemContainer = styled.div<NewsType>`
  display: flex;
  flex-direction: column;
  border-bottom: ${({isInNewsItem}) => !isInNewsItem ? `1px solid ${COLORS.LIGHT_GREY}` : 'none'};
  
  @media screen and (max-width: 500px) {
    padding-bottom: 16px;
  }
`;

export const StyledImageContainer = styled.div<NewsType>`
  width: 100%;
  height: auto;

  @media screen and (max-width: 1920px) {
    height: 358px;
  }

  @media screen and (max-width: 1800px) {
    height: 331px;
  }

  @media screen and (max-width: 1600px) {
    height: 286px;
  }

  @media screen and (max-width: 1440px) {
    height: 251px;
  }

  @media screen and (max-width: 1200px) {
    height: 211px;
  }

  @media screen and (max-width: 1000px) {
    height: 166px;
  }

  @media screen and (max-width: 800px) {
    height: 166px;
  }

  /* ${({isInNewsItem}) => isInNewsItem == true && `height:357px;`}; */
`;

export const StyledImage = styled(Image)<NewsType>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledNewsMetaContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 16px 0;

  @media screen and (max-width: 500px) {
    margin: 20px 0 16px 0;
  }
`;

export const StyledTagContainer = styled.div`
  background-color: ${COLORS.LIGHT_GREY_3};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  padding: 2px 8px;
`;

export const StyledTagText = styled(ExtendedText)`
  color: ${COLORS.BLACK};
`;

export const StyledDateText = styled(ExtendedText)`
  color: ${COLORS.SECONDARY_GREY};
`;

export const StyledTitle = styled(ExtendedText)<NewsType>`
  color: ${COLORS.BLACK};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({isInNewsItem}) => isInNewsItem ? 1 : 3};
  -webkit-box-pack: center;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  transition: max-height 1s linear;
  overflow: hidden;
`;

export const StyledReadmoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 21px 0;

  &:hover img {
    transform: translateX(10px);
  }

  @media screen and (max-width: 500px) {
    margin: 20px 0 0 0;
  }
`;

export const StyledReadmoreText = styled(ExtendedText)`
  text-transform: uppercase;
  color: ${COLORS.BLACK};
`;

export const StyledReadmoreIcon = styled(Image)`
  margin:  0 8px 3px 8px;
  transition: 0.5s;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;