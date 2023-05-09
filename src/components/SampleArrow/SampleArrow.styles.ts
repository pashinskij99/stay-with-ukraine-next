import Image from "next/image";
import styled from "styled-components";

type CarouselArrowType = {
  isLeft?: boolean;
};

export const StyledCarouselArrowContainer = styled.div<CarouselArrowType>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(000, 000, 000, 0.3);
  position: absolute;
  top: 45%;
  z-index: 200;
  ${({ isLeft }) => (isLeft ? 'left: 5px' : 'right: 5px')};
  transform: rotate(${({ isLeft }) => (isLeft ? '0deg' : '180deg')});
`;

export const StyledCarouselArrow = styled(Image)`
  width: 30px;
  height: 30px;
`;