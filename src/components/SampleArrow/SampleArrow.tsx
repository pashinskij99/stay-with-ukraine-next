import { FC } from 'react';

import {
  StyledCarouselArrow,
  StyledCarouselArrowContainer,
} from './SampleArrow.styles';
import { SampleArrowProps } from './SampleArrow.types';

export const SampleArrow: FC<SampleArrowProps> = ({
  isLeft,
  onClick,
  icon,
}) => {
  return (
    <StyledCarouselArrowContainer isLeft={isLeft}>
      <StyledCarouselArrow
        src={icon}
        alt='arrow'
        width={50}
        height={50}
        onClick={onClick}
      />
    </StyledCarouselArrowContainer>
  );
};
