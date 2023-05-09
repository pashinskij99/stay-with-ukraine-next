import Image from 'next/image';
import styled from "styled-components";

import { GeneralH2 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

import { IMAGES } from '../../../public/images';

export const StyledAreasOfActivityContainer = styled.div`
  padding: 100px 130px;
  display:flex;
  flex-direction:column;
  align-items: center;
  background-color: ${COLORS.WHITE};
  background-image: url(${IMAGES.BACKGROUND_YELLOW_CIRCLE.default.src});
  background-repeat: no-repeat;
  background-position: 0 0;

  @media screen and (max-width: 1024px) {
    padding: 80px 50px;
  }

  @media screen and (max-width: 440px) {
    padding: 60px 20px;
    background-image: none;
  }
`;

export const StyledAreasOfActivityImage = styled(Image)`
  margin-bottom:23px;
`;

export const StyledAreasOfActivityTitle = styled(GeneralH2)`
  margin:50px 0;

  @media screen and (max-width: 500px) {
    margin:30px 0;
  }
`;

export const StyledAreasOfActivitySubtitle = styled.h3`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  margin-bottom:50px;
  color: ${COLORS.BLACK};
  max-width: 780px;

  @media screen and (max-width: 440px) {
    font-size: 30px;
    line-height: 36px;
    margin-bottom:30px;
  }
`;