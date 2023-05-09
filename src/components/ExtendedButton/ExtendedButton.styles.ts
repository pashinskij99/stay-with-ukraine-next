import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

type ButtonType = {
  hoverColor?: string;
};

export const ButtonContainer = styled(Link)<ButtonType>`
  overflow: hidden;
  display: inline-block;
  width: auto;
  height: auto;
  white-space: nowrap;

  ${({ hoverColor }) =>
    `
    &:hover {  
      box-shadow: 0px 0px 30px -10px ${hoverColor};    
      ${StyledExtendedText} {
        transform: translateY(-150%);
        bottom: 100%;
      }

      ${StyledAbsoluteExtendedText} {
        bottom: 0%;
        transform: translateY(-0%);
      }
    }
  `};
`;

export const StylesTextsContainer = styled.div`
  position: relative;
  height: 18px;
`;

export const StyledInvisibleText = styled.span`
  opacity: 0;
`;

export const StyledExtendedText = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(0);
  transition: 200ms;
`;

export const StyledAbsoluteExtendedText = styled.span`
  position: absolute;
  bottom: -250%;
  left: 0;
  transform: translateY(0);
  opacity: 1;
  transition: 200ms;
`;

export const StyledIcon = styled(Image)``;
