import Image from 'next/image';
import styled from 'styled-components';

import { GeneralH2 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

export const StyledMainContainer = styled.div`
  padding: 100px 0;
  background-color: ${COLORS.WHITE};

  @media screen and (max-width: 500px) {
    padding: 60px 0;
  }
`;

export const StyledTitle = styled(GeneralH2)`
  margin-bottom: 50px;

  @media screen and (max-width: 500px) {
    text-align: center;
    margin-bottom: 31px;
  }
`;

export const StyledCarouselContainer = styled.div`
  max-height: 480px;
  overflow-y: hidden;

  @media screen and (max-width: 500px) {
    max-height: 271px;
  }
`;

export const StyledCarouselItem = styled.div`
  padding: 0 1px;
  flex-shrink: 0;
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
  max-width: 100%;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 250px;
  }

  @media screen and (max-width: 500px) {
    width: 172px;
    height: 271px;
  }
`;
