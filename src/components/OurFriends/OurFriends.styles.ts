import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

type TagType = {
  isSelected?: boolean;
};

export const StyledMainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 130px;

  @media screen and (max-width: 1000px) {
    padding: 94px 80px;
  }

  @media screen and (max-width: 799px) {
    padding: 94px 20px;
  }

  @media screen and (max-width: 500px) {
    padding: 47px 20px 0px 20px;
  }
`;

export const StyledTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0 40px 0;

  @media screen and (max-width: 660px) {
    overflow-x: auto;
    white-space: nowrap; 
    justify-content: flex-start;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledTag = styled.span<TagType>`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${({ isSelected }) =>
    isSelected ? COLORS.YELLOW : COLORS.SECONDARY_GREY};
  border-bottom: ${({ isSelected }) =>
    isSelected ? `1px solid ${COLORS.YELLOW}` : 'none'};
  margin: 0 25px;
  cursor: pointer;
  padding-bottom: 8px;

  &:hover {
    color: ${COLORS.YELLOW};
  }

  @media screen and (max-width: 465px) {
    margin: 0 8px;
  }
`;

export const StyledItemsContainer = styled.div`
  padding: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  min-width: 100%;
  max-width: 100%;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledFriendItem = styled(Image)`
  object-fit: contain;
  max-width: 100%;
  margin: 0 auto;
`;

export const StyledButtonContainer = styled.div`
  z-index: 150;
`;

export const StyledGradientBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  z-index:100;
  transform: rotate(180deg);
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.1) 80%, transparent);

`;
