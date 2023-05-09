import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

type TagType = {
  isSelected: boolean;
};

export const StyledMainContainer = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    padding: 60px 0;
  }
`;

export const StyledTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 38px 0;

  @media screen and (max-width: 750px) {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    justify-content: flex-start;
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    margin: 32px 0 40px 0;
  }
`;

export const StyledLocationTagsContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: start;
  }
`;

export const StyledTagContainer = styled.div<TagType>`
  margin: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-bottom: 8px;
  border-bottom: ${({ isSelected }) =>
    isSelected ? `1px solid ${COLORS.YELLOW}` : 'none'};

  @media screen and (max-width: 500px) {
    margin: 0 16px;
  }
`;

export const StyledTagText = styled.span<TagType>`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${({ isSelected }) =>
    isSelected ? COLORS.YELLOW : COLORS.SECONDARY_GREY};
`;

export const StyledLocationTagContainer = styled.div<TagType>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 74px;
  border: 2px solid ${COLORS.DARK_GREY};
  padding: 10px 20px;
  margin: 4px 8px;
  cursor: pointer;
  border: 2px solid
    ${({ isSelected }) =>
      isSelected ? `${COLORS.YELLOW}` : `${COLORS.DARK_GREY}`};
`;

export const StyledLocationTagText = styled.span<TagType>`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ isSelected }) =>
    isSelected ? COLORS.YELLOW : COLORS.SECONDARY_GREY};
`;

export const StyledItemsContainer = styled.div`
  width: 100%;
  margin-top: 54px;

  @media screen and (max-width: 500px) {
    margin-top: 38px;
    padding: 0 20px;
  }
`;
