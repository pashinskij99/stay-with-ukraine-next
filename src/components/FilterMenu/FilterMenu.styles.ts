import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

type ButtonType = {
  currentheight: string;
  isInNews?: boolean;
};

type TextFormType = {
  isCapitalize?: boolean;
  isFirstElement?: boolean;
  isselected?: boolean;
  isInNews?: boolean;
};

export const StyledFilterContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledFilterButton = styled.div<ButtonType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 17px 32px;
  border: 1px solid ${COLORS.LIGHT_GREY};
  ${({ isInNews, currentheight }) => {
    if (isInNews === false) {
      return `
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-left-radius: ${currentheight === '40px' ? '30px' : '0'};
        border-bottom-right-radius: ${currentheight === '40px' ? '30px' : '0'};
      `;
    } else {
      return `
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-left-radius: ${currentheight === '40px' ? '25px' : '0'};
        border-bottom-right-radius: ${currentheight === '40px' ? '25px' : '0'};
      `;
    }
  }};
  border-bottom: ${({ currentheight }) =>
    currentheight === '40px' ? `1px solid ${COLORS.LIGHT_GREY}` : 'none'};
  height: ${({ isInNews }) => !isInNews && '64px'};

  @media screen and (max-width: 500px) {
    padding: 16px 32px;
    height: ${({ isInNews }) => !isInNews && '60px'};
  }
`;

export const StyledIcon = styled(Image)<ButtonType>`
  width: 12px;
  height: 12px;
  transform: ${({ currentheight }) =>
    String(currentheight) !== '40px' && `rotate(180deg)`};
`;

export const StyledFilterText = styled.div<TextFormType>`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${({isInNews}) => isInNews ? '15px' : '16px'};
  line-height: 16px;
  text-transform: ${({ isCapitalize }) =>
    isCapitalize ? 'capitalize' : 'uppercase'};
  color: ${({isFirstElement, isInNews}) => !isFirstElement && isInNews !== false ? COLORS.BLACK : COLORS.SECONDARY_GREY};
`;

export const StyledDropdownMenu = styled.div<ButtonType>`
  position: absolute;
  max-height: 250px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  top: 100%;
  left: 0;
  width: 100%;
  border-left: 1px solid ${COLORS.LIGHT_GREY};
  border-right: 1px solid ${COLORS.LIGHT_GREY};
  border-bottom-left-radius: ${({ currentheight }) =>
    currentheight !== '40px' ? '25px' : '0'};
  border-bottom-right-radius: ${({ currentheight }) =>
    currentheight !== '40px' ? '25px' : '0'};
  border-bottom: 1px solid ${COLORS.LIGHT_GREY};
  background-color: ${COLORS.WHITE};
  z-index: 200;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ababab;
    border-radius: 25px;
    border: 3px solid #f5f5f5;
  }
`;


export const StyledMenuItem = styled.div<TextFormType>`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${({isInNews}) => isInNews ? '15px' : '16px'};
  line-height: 16px;
  text-transform: ${({ isCapitalize }) =>
    isCapitalize ? 'capitalize' : 'uppercase'};
  padding: 17px 32px;
  color: ${({isselected, isInNews}) => isselected && isInNews !== false ? COLORS.BLACK : COLORS.SECONDARY_GREY};
  cursor: pointer;
  z-index: 100;
  transition: 0.3s;
  &:hover {
    color: ${COLORS.BLACK};
  }
`;
