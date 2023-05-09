import Slider from 'react-slick';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

export const StyledMainContainer = styled.div`
  padding: 100px 130px;
  background-color: ${COLORS.WHITE};

  @media screen and (max-width: 839px) {
    padding: 60px 40px;
  }

  @media screen and (max-width: 500px) {
    padding: 60px 20px;
  }
`;

export const StyledSlider = styled(Slider)`
  & .slick-track {
    gap: 0px !important;
  }
`;
